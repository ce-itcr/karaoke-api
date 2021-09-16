const express = require('express');
const parser = require('body-parser');
const router = express.Router();
const { getSong, postSong, updateSongInfo, deleteSelectedSong, getSongLyrics, updateSongLyrics,
        getAllSongs, songSearch } = require('../components/songsComponent');

//
router.get('/getAllSongs', getAllSongs);

//Listo        http://localhost:5000/songs/getSong/{"songName":"Casin","songAuthor":"glue70"}
router.get('/getSong/:filter', getSong);

//Listo        http://localhost:5000/songs/createSong/{"songName":"La Cucaracha","songAuthor":"Yo","songAlmbum":"Nose","songLyrics":"La cucaracha ya no puede caminar","creationAuthor":"Agustin","creationDate":"Hoy","modificationAuthor":"Angelito","modificationDate":"hoy"}
router.post('/createSong/:data', postSong);

//Listo        http://localhost:5000/songs/updateSong/{ "songName":"Casin", "songAuthor":"glue70"}/{"modificationAuthor":"Momboñombo Moñagallo"}
router.put('/updateSong/:filter/:update', updateSongInfo);

//Listo        http://localhost:5000/songs/deleteSong/{"songName":"Mr Blue Sky", "songAuthor":"ELO"}
router.delete('/deleteSong/:filter', deleteSelectedSong);

//
router.get('/search/:data', songSearch);

module.exports = router;