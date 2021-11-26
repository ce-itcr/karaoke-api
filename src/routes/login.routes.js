const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { verifyUser, getSingleUser, updateFavorites, updatePlayedSongs, createUser } = require('../components/auth.component')

var jsonParser = bodyParser.json();

router.post('/login', jsonParser, verifyUser);
router.post('/signup/:userId', jsonParser, createUser);
router.get('/user/:userId', getSingleUser);
router.put('/user/favorites/:userId', jsonParser, updateFavorites);
router.put('/user/played/:userId', jsonParser, updatePlayedSongs);

module.exports = router;