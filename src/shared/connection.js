const { MongoClient }  = require('mongodb');
const mongoose = require('mongoose');
//let uriConnection = 'mongodb+srv://Admin:Admin@karaoke.geity.mongodb.net/KaraokeDB?retryWrites=true&w=majority';
let uriConnection = 'mongodb+srv://admin:kQnPTktBclEyFZ0M@cluster0.pnrwxxp.mongodb.net/karaoke?retryWrites=true&w=majority'
let database; 

if (process.env.NODE_ENV == 'test'){
    database = mongoose.connection;
} else {
    MongoClient.connect(uriConnection, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.log('⛔️ An error occurred establishing connection ... \n[Error]: ' + error);
            process.exit(0);
        }
        database = client.db('karaoke');
        console.log("🚀 ~ file: connection.js:16 ~ MongoClient.connect ~ database:", database)
        console.log('☑️  The server has successfully connected to the Karaoke ... ')
    });
}

const getConnection = () => database;

module.exports = { getConnection }