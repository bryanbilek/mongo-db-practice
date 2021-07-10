const mongoose = require('mongoose');

// const { Schema } = mongoose; 
// const userSchema = new Schema({
//     first_name: String,
//     last_name: String,
//     email: String
// })

// const User = mongoose.model('User', userSchema);

//below appears to be a more simple way of making a model
const User = mongoose.model('user', {
    first_name: String,
    last_name: String,
    email: String
})

module.exports = User;