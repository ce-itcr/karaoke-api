const express = require('express');
const parser = require('body-parser');
const router = express.Router();
var jsonParser = parser.json();
const { getSong, postSong, updateSong, deleteSong, getSongLyrics, updateSongLyrics,
        getAllSongs, songSearch } = require('../components/songsComponent');


router.get('/', getAllSongs);

router.get('/:id', getSong);

router.get('/:id/lyrics', getSongLyrics);

router.post('/', jsonParser, postSong);

router.put('/', jsonParser, updateSong);

router.delete('/:id', deleteSong);

router.put('/:id/lyrics', jsonParser, updateSongLyrics);

router.get('/search/:data', songSearch);

module.exports = router;