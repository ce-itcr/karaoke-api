
// connection with mongodb 
let uri = 'mongodb+srv://Admin:Admin@karaoke.geity.mongodb.net/KaraokeDB?retryWrites=true&w=majority';
const { object } = require('joi');
let mongoose = require('mongoose');
mongoose.connect(uri, () => console.log('DB conectada'));

let userSchema = new mongoose.Schema({
    songName : String,
    songAuthor : String,
    songAlbum : String,
    songLyrics : String,
    creationAuthor : String,
    creationDate : String,
    modificationAuthor : String,
    modificationDate : String
}, { collection: 'Songs' });

let song = mongoose.model('Songs', userSchema);

module.exports = {song};