
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


createSong = (name, author, album, lyrics, cAuthor, cDate, mAuthor, mDate) => {

    song.create({ 

        songName : name,
        songAuthor : author,
        songAlbum : album,
        songLyrics : lyrics,
        creationAuthor : cAuthor,
        creationDate : cDate,
        modificationAuthor : mAuthor,
        modificationDate : mDate

     }, function (err, data) {
        if (err){
            console.log(err);
        }else{
            console.log(data);
        }
    });

}

/*
findSong = async (filter) => {
    const obj = JSON.parse(filter);
    return await song.findOne(obj);
}

updateSong = (filter, update) => {
    
}

*/

deleteSong = (filter) => {
    song.deleteOne(filter, (error, data) => {
        if(error){
            console.log('Error al eliminar cancion');
        }else{
            console.log('Cancion eliminada correctamente');
        }
    });
}
module.exports = {song};