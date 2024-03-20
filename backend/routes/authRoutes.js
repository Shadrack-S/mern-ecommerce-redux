const express = require('express');
const { signUp, login, status, protect,logout } = require('../controllers/authController');
const router = express.Router();

router.post('/signup',signUp)
router.post('/login',login)
router.post('/status',protect,status);
router.get('/logout' ,logout)

module.exports =router