const express = require('express');
const parser = require('body-parser');
const router = express.Router();
const { getSong, postSong, updateSongInfo, deleteSelectedSong, getSongLyrics, updateSongLyrics,
        getAllSongs, songSearch } = require('../components/songsComponent');

//
router.get('/getAllSongs', getAllSongs);

//Listo        http://localhost:5000/songs/getSong/{"songName":"Casin","songAuthor":"glue70"}
router.get('/getSong/:filter', getSong);

//
router.get('/:id/lyrics', getSongLyrics);

//
router.post('/', postSong);

//
router.put('/updateSong/:filter/:update', updateSongInfo);

//
router.delete('/:id', deleteSelectedSong);

//
router.put('/:id/lyrics', updateSongLyrics);

//
router.get('/search/:data', songSearch);

module.exports = router;