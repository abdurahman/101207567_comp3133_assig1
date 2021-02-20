const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: Number,
    username: String,
    password: String,
    email: String,
});

const Users = mongoose.model("Users", UserSchema);
module.exports = UserSchema;