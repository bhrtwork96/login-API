const express = require('express');
const { register, login } = require('../controller/auth');
const { checkregisterData } = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/api/v1/register',[checkregisterData], register);
router.post('/api/v1/login',login)

module.exports = router;