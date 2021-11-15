const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { verifyUser, getSingleUser } = require('../components/auth.component')

var jsonParser = bodyParser.json();

router.post('/login', jsonParser, verifyUser);
router.get('/user/:userId', getSingleUser);

module.exports = router;