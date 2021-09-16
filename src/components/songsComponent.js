
const Joi = require('joi');
const {song} = require('../shared/database');

// get song file
const getSong = (req, res) => {
    const filter = JSON.parse(req.params.filter);
    song.findOne(filter, (error, data) =>
    {
    if(error){
        res.status(400).send('Error');
    }else{
        res.status(200).send(data);
    }})
};

// update song file
const updateSongInfo = (req, res) => {
    const filter = JSON.parse(req.params.filter);
    const update = JSON.parse(req.params.update);
    song.updateOne(filter, update, (error, data) => {
        if(error){
            res.status(400).send('Error al modificar la cancion');
        }else{
            res.status(200).send('Cancion modificada correctamente');
        }});
};


// post song file
const postSong = (req, res) => {
    const data = JSON.parse(req.params.data);
    console.log(data);
    song.create(data, function (err, info) {
        if (err){
            res.status(400).send('Error al crear cancion');
        }else{
            res.status(200).send('Cancion creada');
        }
    });
};


// delete song file
const deleteSelectedSong = (req, res) => {
    const filter = JSON.parse(req.params.filter);
    song.deleteOne(filter, (error, data) => {
        if(error){
            res.status(400).send('Error al eliminar cancion');
        }else{
            res.status(200).send('Cancion eliminada correctamente');
        }
    });
    
};

// get song lyrics
const getSongLyrics = (req, res) => {
    res.status(200).send('getSongLyrics');
};

// update song lyrics
const updateSongLyrics = (req, res) => {
    res.status(200).send('updateSongLyrics');
};

// get all the songs
const getAllSongs = (req, res) => {
    res.status(200).send('getAllSongs');
};

// search for matches within lyrics, author, and album
const songSearch = (req, res) => {
    res.status(200).send('songSearch');
};

module.exports = {
    getSong, postSong, updateSongInfo, deleteSelectedSong,
    getSongLyrics, updateSongLyrics, getAllSongs,
    songSearch
}