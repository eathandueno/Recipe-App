const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const tokensSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    balance: {
        type: Number,
        default: 5
    }
}, {
    timestamps: true
});

const Tokens = mongoose.model('Tokens',tokensSchema);
module.exports = Tokens;