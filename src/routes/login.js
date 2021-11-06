const express = require('express');
const parser = require('body-parser');
const router = express.Router();

const {login} = require('../components/loginComponent');

//
router.get('/login/:credentials', login);

module.exports = router;