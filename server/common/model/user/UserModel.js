const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})


module.exports = {
  initialize: (mongoose) => {
    this.model = mongoose.model('User', UserModel)
  },
  createUser: (user) => {
    return this.model.create(user)
  }
}