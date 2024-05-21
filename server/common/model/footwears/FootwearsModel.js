const mongoose = require('mongoose');

const FootwearsModel = new mongoose.Schema({
  type: {
    type: String
  },
  material: {
    type: String
  },
  ocassion: {
    type: String
  },
  gender: {
    type: String
  },
  color: {
    type: String
  },
  price: {
    type: Number
  },
  size: {
    type: Number
  },
  status: {
    type: 'unsold'
  }
})


module.exports = {
  initiliaze: (mongoose) => {
    return this.model = mongoose.model('footwear', FootwearsModel)
  },
  create: (data) => {
    return this.model.create(data)
  },
  getAll: () => {
    return this.model.find()
  }

}