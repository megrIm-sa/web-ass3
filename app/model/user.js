var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    timestamp: String,
});
var user = new mongoose.model('User', schema);
module.exports = user;