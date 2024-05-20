const express = require('express');
const { PORT } = require('./config/config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

const FootwearsModel = require('./common/model/footwears/FootwearsModel');
const FootwearsRoutes = require('./common/model/footwears/FootwearsRoutes');

FootwearsModel.initiliaze(mongoose)

mongoose.connect(dbConfig.url).then(() => {
  console.log('Database Connection Established')

  app.use('/footwear', FootwearsRoutes)

}).catch(() => {

  console.log('cannot connect')
});

app.listen(PORT, () => console.log('Server listening on : ' + PORT))