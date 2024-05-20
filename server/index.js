const express = require('express');
const { PORT } = require('./config/config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

const UserModel = require('./common/model/user/UserModel');
const UserRoutes = require('./common/model/user/UserRoutes');

// UserModel.initialize(mongoose)

mongoose.connect(dbConfig.url).then(() => {
  console.log('Database Connection Established')

  // app.use('/user', UserRoutes)

}).catch(() => {

  console.log('cannot connect')
});

app.listen(PORT, () => console.log('Server listening on : ' + PORT))