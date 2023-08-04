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
    .get(function(req, res) {
        res.end("test response");
    });

    app.route('/signup')
    .post(async function(req, res) {
        const name = req.body.name;
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
                    return res.status(401).json({ error: 'user not exist' });
                };
            } catch (err) {
                console.error('Error occurred in POST request to /signup', err.message);
                res.status(500).json({ error: 'An error occurred while creating new user.' });
            };
        };
    });

    app.route('/:chatid')
    .get(auth, function(req, res) {
        const id = req.params.chatid;
        res.end(id);
    });

};