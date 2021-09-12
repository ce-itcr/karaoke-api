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
    modificationDate : String,
}, { collection: 'Songs' });

let song = mongoose.model('Songs', userSchema);

/*user.create({ Name: 'Albert', LastName: 'Bezos', Age: 32 }, function (err, data) {
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/

findSong = () => {
    song.findOne({songName : 'Casin'}, (error, data) =>
    {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
}



module.exports = {findSong}