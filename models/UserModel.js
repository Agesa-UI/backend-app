const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  matricNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: '',
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
