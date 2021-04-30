const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
})

const User = mongoose.model('User', userSchema)

module.exports = User
