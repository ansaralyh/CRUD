const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required']
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: [true,'User with this email already exists']
    },
    gender: String,
    status: String
});

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;
