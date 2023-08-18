const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
    type: String,
    required: true,
    unique: true,
  },
  
  password:String
    
});

const UserModal = mongoose.model('User', userSchema);

module.exports = UserModal;
