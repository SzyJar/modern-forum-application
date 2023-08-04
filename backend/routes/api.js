const mongoose = require('mongoose');


module.exports = function (app) {
    app.route('/')
    .get(function(req, res) {
        res.end("test response");
    });
};