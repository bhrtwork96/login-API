const express = require('express');
const {home} = require('../controller/home');
const { tokenverify } = require('../middleware/jwt');
const router = express.Router();

router.get('/',[tokenverify], home);


module.exports = router;