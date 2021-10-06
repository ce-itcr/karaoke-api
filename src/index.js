let adminClient = require('@keycloak/keycloak-admin-client').default;
let Issuer = require('openid-client');
var issuer = Issuer.Issuer;

const express = require('express');
const cors = require('cors');
const songsRouter = require('./routes/songs');
const { set } = require('mongoose');

const {login} = require('./components/loginComponent');

const PORT = process.env.PORT || 80;

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/karaoke', songsRouter);

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