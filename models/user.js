const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    username:String,
    email: String,
    password:String
},{timestamps:true})

const User = mongoose.model('user',userSchema);

module.exports = User;