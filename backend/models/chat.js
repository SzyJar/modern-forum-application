const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatMessageSchema = new mongoose.Schema({
    sender: {
      type: String,
      required: true,
    },
    avatar: {
      type: Number,
      requierd: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
});

const chatSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    messages: [chatMessageSchema],
});

const Chat = mongoose.model('Chats', chatSchema);

module.exports = Chat;