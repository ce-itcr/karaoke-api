const {getConnection} = require('../shared/connection');
const { getFullDate, jsonConcat } = require('../shared/utils/utils');

const getAllSongs = (req, res) => {
    const databaseConnection = getConnection();
    databaseConnection.collection("Songs").find({}, { projection: { _id:0 } } ).limit(20)
    .toArray(function(error, data) {
        if (error) {
            res.status(400).send('⛔️ An error occurred getting all songs ... \n[Error]: ' + error);
        } else {
            res.status(200).send(data);
        }
      });
};

const getSingleSong = async (req, res) => {
    let songId = req.params.songId;
    console.log(songId)

    const databaseConnection = getConnection();
    databaseConnection.collection("Songs").findOne({"id": songId}, { projection: { _id:0 } }, 
        function(error, data) {
            if (error) {
                res.status(400).send('⛔️ An error occurred getting single song ... \n[Error]: ' + error);
            } else {
                if(data === null){
                    res.status(404).send('⚠️ There are no songs with the specified specifications ...');
                } else{
                    res.status(200).send(data);
                }
            }
      });
};


const createSong = (req, res) => {
    let songId = req.body.songId;

    const databaseConnection = getConnection();
    databaseConnection.collection("Songs").findOne({"songId": songId}, { projection: { _id:0 } }, 
        function(error, data) {
            if (error) {
                res.status(400).send('⛔️ An error occurred getting single song ... \n[Error]: ' + error);
            } else {
                if(data === null){
                    databaseConnection.collection('Songs').insertOne(req.body, (error, data) => {
                        if(error){
                            res.status(400).send('⛔️ An error occurred creating songs ... \n[Error]: ' + error);  
                        } else {
                            res.status(200).send('☑️ The song was created successfully ... ');
                        }
                    });
                } else if(data !== null){
                    res.status(401).send('⚠️ There is already a song with the given id ...');
                }
            }
      });
};

const updateSong = (req, res) => {
    let songId = req.params.songId;
    let modificationDate = { modificationDate: getFullDate() };
    var jsonBodyAndModificationDate = jsonConcat(req.body, modificationDate)
    const databaseConnection = getConnection();
     
    var newData = { $set: jsonBodyAndModificationDate };

    databaseConnection.collection('Songs').updateOne({'songId': songId}, newData, 
        function(error) {
            if(error) {
                res.status(400).send('⛔️ An error occurred updating song ... \n[Error]: ' + error);  
            } else {
                res.status(200).send('☑️ The song was modified successfully ... ');
            }
    });
};



const removeSong = (req, res) => {
    let songId = req.params.songId;

    const databaseConnection = getConnection();
    databaseConnection.collection('Songs').deleteMany({'songId': songId}, 
        function(error) {
            if(error) {
                res.status(400).send('⛔️ An error occurred deleting songs ... \n[Error]: ' + error);  
            } else {
                res.status(200).send('☑️ The song was deleted successfully ... ');
            }
    });
};



// search for matches within lyrics, author, and album
const songSearch = (req, res) => {
    var params = JSON.parse(req.params.data);
    var name = params.category;
    var regex = params.filter;
    var query;
    switch (name) {
        case "songLRC":
            query = {"songLRC": new RegExp(regex) };
            break;
        case "songName":
            query = {"songName": new RegExp(regex) };
            break;
        case "songAuthor":
            query = {"songAuthor": new RegExp(regex) };
            break;
        case "songAlbum":
            query = {"songAlbum": new RegExp(regex) };
            break;
    }
    console.log(query);

    const databaseConnection = getConnection();
    databaseConnection.collection("Songs").find(query, { projection: { _id:0 } } ).limit(20)
    .toArray(function(error, data) {
        if (error) {
            res.status(400).send('⛔️ An error occurred getting songs ... \n[Error]: ' + error);
        } else {
            res.status(200).send(data);
        }
      });
};


module.exports = { getAllSongs, getSingleSong, createSong, updateSong, removeSong, songSearch }