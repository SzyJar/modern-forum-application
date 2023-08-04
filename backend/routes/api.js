const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const chatSchema = require('../models/chat');
const userSchema = require('../models/user');


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
    .post(function(req, res) {
        const name = req.body.name;
        const password = req.body.password;
        const newuser = req.body.newuser;
        const saltRounds = 12;

        bcrypt.hash(password, saltRounds, (err, hash) => {
            console.log(hash);
            res.end(hash);
        });

        if(newuser) {
            // create new sue
        };
        
    });

    app.route('/:chatid')
    .get(function(req, res) {
        const id = req.params.chatid;
        res.end(id);
    });

};