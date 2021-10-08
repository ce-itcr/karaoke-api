let adminClient = require('@keycloak/keycloak-admin-client').default;
let Issuer = require('openid-client');
var issuer = Issuer.Issuer;

const express = require('express');
const cors = require('cors');
const songsRouter = require('./routes/songs');
const loginRouter = require('./routes/login');
const { set } = require('mongoose');

const {login} = require('./components/loginComponent');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
//app.use(cors({origin: 'https://karaoke-ceitcr.netlify.app/', optionsSuccessStatus: 200 }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://karaoke-ceitcr.netlify.app/"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/karaoke', songsRouter);
app.use('/karaoke', loginRouter)

app.get('/', (req, res) => { return res.status(200).send('Hello World from Karaoke´s API'); });
app.get('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.post('*', (req, res) => { res.status(405).send('Method does not exist'); });
app.put('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.delete('*', (req, res)  => { res.status(405).send('Method does not exist'); });

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

//findSong({songName:'Casin',songAuthor:'glue70'});
//createSong({songName:'Mr Blue Sky', songAuthor:'ELO', songAlbum:'Out Of The Blue', songLyrics:"Hey hey mr blue", creationAuthor:'Agustin', creationDate:'11/09/2021', modificationAuthor:'NA', modificationDate:'NA'})
//updateSong({ songName:'Casin', songAuthor:'glue70'},{modificationAuthor:'Momboñombo Moñagallo'});
//deleteSong({songName:'Mr Blue Sky', songAuthor:'ELO'});
//login(); 
