const mongoose = require('mongoose');

const FootwearsModel = new Schema({
  footwearType: {
    type: String
  },
  size: {
    type: Number
  },
  color: {
    type: String
  },
  gender: {
    type: String
  },
  price: {
    type: Number
  }
})


module.exports = {
  initiliaze: (mongoose) => {
    this.model = mongoose.model('footwears')
  }

}