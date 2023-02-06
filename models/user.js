const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true // `email` must be unique
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    }
});

module.exports = mongoose.model('User', userSchema);