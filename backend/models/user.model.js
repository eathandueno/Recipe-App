const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 6
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;