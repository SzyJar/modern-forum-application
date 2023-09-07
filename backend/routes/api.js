const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Chat = require('../models/chat');
const auth = require('../controllers/auth');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'forum-app'
}).catch(err => console.log(err));


module.exports = function (app) {

    app.route('/')
    // Confirm server status
    .get(auth, function(req, res) {
        res.status(200).end('server is up');
    });

    app.route('/signup')
    // Sign up or log in
    .post(async function(req, res) {
        const name = req.body.name;
        const avatar = req.body.avatar;
        const password = req.body.password;
        const newuser = req.body.newuser;
        const saltRounds = 12;

        const user = await User.findOne({ name: name });

        if(newuser) {
            const hash = await bcrypt.hash(password, saltRounds);
            try {
                if (user) {
                    return res.status(409).end('User already exists');
                } else {
                    const newUser = new User({
                        name: name,
                        avatar: avatar,
                        password: hash,
                    });
                    await newUser.save();
                    req.session.userId = newUser._id;
                    req.session.userName = newUser.name;
                    return res.status(201).json({ name: newUser.name, avatar: newUser.avatar });
                };
            } catch (err) {
                console.error('Error occurred in POST request to /signup', err.message);
                res.status(500).json({ error: 'An error occurred while creating new user.' });
            };
        } else {
            try {
                if (user) {
                    const isValidPassword = await bcrypt.compareSync(password, user.password);
                    if(isValidPassword) {
                        req.session.userId = user._id;
                        req.session.userName = user.name;
                        return res.status(200).json({ name: user.name, avatar: user.avatar });
                    };
                    return res.status(401).end('Incorrect password');
                } else {
                    return res.status(404).end('User does not exist');
                };
            } catch (err) {
                console.error('Error occurred in POST request to /signup', err.message);
                res.status(500).end('An error occurred while creating new user');
            };
        };
    });

    app.route('/logout')
    // Log out
    .post(function(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error while destroying session:', err);
                return res.status(500).end('Failed to logout');
            };
            return res.status(200).end('Logged out successfully');
        });
    });

    app.route('/message/:chatname')
    // Create a new message in existing chat
    .post(auth, async function(req, res) {
        const name = req.params.chatname;
        const content = req.body.content;
        try {
            const chat = await Chat.findOne({ name: name });
            
            if(!chat) {
                return res.status(404).end('Chat does not exist');
            };
            
            if (chat.users.length === 0 || chat.users.includes(req.session.userId)) {
                const user = await User.findById(req.session.userId);
                const newChatMessage = {
                    sender: user.name,
                    avatar: user.avatar,
                    content: content,
                    timestamp: new Date(),
                  };
    
                  chat.messages.push(newChatMessage);
                  await chat.save();

                  return res.status(201).json(newChatMessage);
            } else {
                // Client is trying to access other's private chat
                return res.status(404).end('Chat does not exist');
            };
        } catch(err) {
            console.error('Error occurred in POST request to /message/:chatname', err.message);
            res.status(500).end('An error occurred while creating new message');
        };
    })
    // Edit a message
    .put(auth, async function(req, res) {
        const name = req.params.chatname;
        const message_id = req.body.message_id;
        const content = req.body.content;
        try {
            const chat = await Chat.findOne({ name: name });

            if(!chat) {
                return res.status(404).end('Chat does not exist');
            };

            if (!chat.users.length === 0 && !chat.users.includes(req.session.userId)) {
                // Client is trying to access other's private chat
                return res.status(404).end('Chat does not exist');
            };

            const messageSender = chat.messages.find((message) => {
                return message.sender === req.session.userName
                && message._id.toString() === message_id
                && message.content !== '[DELETED]';
            });

            if(!messageSender) {
                return res.status(404).end('Chat message does not exist');
            };

            const message = await Chat.findOneAndUpdate(
                { name: name, 'messages._id': message_id },
                {
                  $set: {
                    'messages.$.content': content + ' [EDITED]',
                    'messages.$.timestamp': new Date(),
                  },
                },
                { new: true },
            );

            return res.json({ message: 'edited'});
        } catch(err) {
            console.error('Error occurred in PUT request to /message/:chatname', err.message);
            return res.status(500).end('An error occurred while editing a message');
        };
    })
    // Delete a message
    .delete(auth, async function(req, res) {
        const name = req.params.chatname;
        const message_id = req.body.message_id;
        try {
            const chat = await Chat.findOne({ name: name });

            if(!chat) {
                return res.status(404).end('Chat does not exist');
            };

            if (!chat.users.length === 0 && !chat.users.includes(req.session.userId)) {
                // Client is trying to access other's private chat
                return res.status(404).end('Chat does not exist');
            };

            const messageSender = chat.messages.find((message) => {
                return message.sender === req.session.userName
                && message._id.toString() === message_id
                && message.content !== '[DELETED]';
            });

            if(!messageSender) {
                return res.status(404).end('Chat message does not exist');
            };

            const message = await Chat.findOneAndUpdate(
                { name: name, 'messages._id': message_id },
                {
                  $set: {
                    'messages.$.content': '[DELETED]',
                    'messages.$.timestamp': new Date(),
                  },
                },
                { new: true },
            );

            return res.json({ message: 'deleted'});
        } catch(err) {
            console.error('Error occurred in DELETE request to /message/:chatname', err.message);
            return res.status(500).end('An error occurred while deleting a message');
        };
    });

    app.route('/chat')
    // Get all chat rooms
    .get(auth, async function(req, res) {
        try {
            const nameList = [];
            const allChats = await Chat.find({});
            for (const chat of allChats) {
              // Ignore private chats
                if (chat.users.length === 0) {
                  nameList.push({
                    name: chat.name,
                    icon: chat.icon,
                  });
                }
            };

            return res.json(nameList);
        } catch(err) {
            console.error('Error occurred in GET request to /chat', err.message);
            return res.status(500).end('An error occurred while retrieving chat rooms');
        };
    });

    app.route('/chat/:chatname')
    // Get all messages from existing chat
    .get(auth, async function(req, res) {
        const name = req.params.chatname;
        try {
            const chat = await Chat.findOne({ name: name })

            if(!chat) {
                return res.status(404).end('Chat does not exist');
            };

            if(chat.users.length === 0 || chat.users.includes(req.session.userId)) {
                return res.json(chat.messages);
            };
            // Client is trying to access other's private chat
            return res.status(404).end('Chat does not exist');
        } catch(err) {
            console.error('Error occurred in GET request to /chat/:chatname', err.message);
            return res.status(500).end('An error occurred while retrieving messages');
        };
    })
    // Create new chat
    .post(auth, async function(req, res) {
        // Do not allow '@' in chat name
        // '@' is reserved for private chat naming
        let name = req.params.chatname.replace(/@/g, '');
        let users = req.body.users;
        const userIds = [];
        try {
            if(users && users.length > 0) {
              for (const user of users) {
                  const userPromise = await User.findOne({ name: user });
                  userIds.push(userPromise._id);
              };
              // Generate easy to access chat name by user name
              users.sort();
              name = users[0] + '@' + users[1] + '@private';
            };
        
            const chat = await Chat.findOne({ name: name });
    
            if(!chat) {
                const newChat = new Chat({
                    name: name,
                    users: userIds,
                });
                await newChat.save();
                return res.status(201).end('created');
            };
    
            return res.status(409).json({ error: 'chat already exist' });
        } catch(err) {
            console.error('Error occurred in POST request to /chat/:chatname', err.message);
            return res.status(500).end('An error occurred while creating new chat');
        };
    });

};