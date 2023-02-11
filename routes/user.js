// 1
const express = require('express');
const { register, login } = require('../Controllers/user');

// 2
const router = express.Router();

// routes


// register
router.post('/register', register)

// login
router.post('/login', login)

// 3
module.exports = router;

