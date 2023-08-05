const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Chat = require('../models/chat');
const User = require('../models/user');
const auth = require('../controllers/auth');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'forum-app'
}).catch(err => console.log(err));


module.exports = function (app) {

    app.route('/')
    // Confirm server status
    .get(function(req, res) {
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
                    return res.status(409).json({ error: 'user exists' });
                } else {
                    const newUser = new User({
                        name: name,
                        avatar: avatar,
                        password: hash,
                    });
                    await newUser.save();
                    return res.status(201).end('created');
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
                        return res.status(200).end('success');
                    };
                    return res.status(401).json({ error: 'incorrect password' });
                } else {
                    return res.status(401).json({ error: 'user does not exist' });
                };
            } catch (err) {
                console.error('Error occurred in POST request to /signup', err.message);
                res.status(500).json({ error: 'An error occurred while creating new user.' });
            };
        };
    });

    app.route('/logout')
    // Log out
    .post(function(req, res) {
        req.session.userId = null;
        res.json({ message: 'Logged out successfully' });
    });

    app.route('/message/:chatname')
    // Create a new message in existing chat
    .post(auth, async function(req, res) {
        const name = req.params.chatname;
        const content = req.body.content;

        try {
            const chat = await Chat.findOne({ name: name });

            if(!chat) {
                return res.status(401).json({ error: 'chat does not exist' });
            };
    
            if (chat.users.length === 0 || chat.users.includes(req.session.userId)) {
                const newChatMessage = {
                    sender: req.session.userId,
                    content: content,
                    timestamp: new Date(),
                  };
    
                  chat.messages.push(newChatMessage);
                  await chat.save();

                  return res.status(201).json(newChatMessage);
            } else {
                // Client is trying to access other's private chat
                return res.status(401).json({ error: 'chat does not exist' });
            };
        } catch(err) {
            console.error('Error occurred in POST request to /message/:chatname', err.message);
            res.status(500).json({ error: 'An error occurred while creating new message.' });
        };
    });

    app.route('/chat')
    // Get all chat rooms
    .get(auth, async function(req, res) {
        try {
            const nameList = [];
            const allChats = await Chat.find({});
            for (const chat of allChats) {
                nameList.push({
                    name: chat.name,
                    icon: chat.icon,
                });
            };

            return res.json(nameList);
        } catch(err) {
            console.error('Error occurred in GET request to /chat', err.message);
            res.status(500).json({ error: 'An error occurred while retrieving chat rooms.' });
        };
    });

    app.route('/chat/:chatname')
    // Get all messages from existing chat
    .get(auth, async function(req, res) {
        const name = req.params.chatname;
        try {
            const chat = await Chat.findOne({ name: name });

            if(!chat) {
                return res.status(401).json({ error: 'chat does not exist' });
            };

            if(chat.users.length === 0 || chat.users.includes(req.session.userId)) {
                return res.json(chat.messages);
            };
            // Client is trying to access other's private chat
            return res.status(401).json({ error: 'chat does not exist' });
        } catch(err) {
            console.error('Error occurred in GET request to /chat/:chatname', err.message);
            res.status(500).json({ error: 'An error occurred while retrieving messages.' });
        };
    })
    // Create new chat
    .post(auth, async function(req, res) {
        const name = req.params.chatname;
        const icon = req.body.icon;
        const isPrivate = req.body.isPrivate;
        const users = req.body.users;

        try {
            const chat = await Chat.findOne({ name: name });
            const userIds = []
    
            if(isPrivate) {
                for (const user of users) {
                    const userPromise = await User.findOne({ name: user });
                    userIds.push(userPromise._id);
                };
            };
    
            if(!chat) {
                const newChat = new Chat({
                    name: name,
                    icon: icon,
                    users: userIds,
                });
                await newChat.save();
                return res.status(201).end('created');
            };
    
            res.status(301).json({ error: 'chat already exist' });
        } catch(err) {
            console.error('Error occurred in POST request to /chat/:chatname', err.message);
            res.status(500).json({ error: 'An error occurred while creating new chat.' });
        };
    });

};