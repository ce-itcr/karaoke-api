
// connection with mongodb 
let uri = 'mongodb+srv://Admin:Admin@karaoke.geity.mongodb.net/KaraokeDB?retryWrites=true&w=majority';
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

/*
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

}*/



findSong = (tune) => {
    song.findOne({songName : tune}, (error, data) =>
    {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
}



module.exports = {findSong}