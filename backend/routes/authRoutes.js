const mongoose = require('mongoose');
const express = require('express');
const Router = express.Router();
const authentication = require('../middleware/auth')
const authController = require('../controllers/authController');

Router.get('/register', authentication , authController.register);

module.exports = Router ;