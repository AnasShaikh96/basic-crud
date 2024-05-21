const mongoose = require('mongoose');

const AccessoriesModel = new mongoose.Schema({
  type: {
    type: String
  },
  material: {
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
    return this.model = mongoose.model('accessories', AccessoriesModel)
  },
  create: (data) => {
    return this.model.create(data)
  },
  get: (query) => {
    return this.model.find(query)
  }

}