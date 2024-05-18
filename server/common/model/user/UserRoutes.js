const UserController = require('./UserController');

const router = require('express').Router();


router.post('/create', UserController.createUser)

module.exports = router