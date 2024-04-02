const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eoa: {
        type: String,
        required: true
    },
    smartWalletAddress: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel