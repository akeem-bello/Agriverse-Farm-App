const mongoose = require('mongoose');
messagesSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
})
const messagesModel = mongoose.model('messages_tb', messagesSchema);
module.exports = messagesModel;