const express = require('express');
const Joi = require('joi');

// get song file
const getSong = (req, res) => {
    res.status(200).send('getSong');
};

// post song file
const postSong = (req, res) => {
    res.status(200).send('postSong');
};

// update song file
const updateSong = (req, res) => {
    res.status(200).send('updateSong');
};

// delete song file
const deleteSong = (req, res) => {
    res.status(200).send('deleteSong');
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
    getSong, postSong, updateSong, deleteSong,
    getSongLyrics, updateSongLyrics,
    getAllSongs,
    songSearch
}