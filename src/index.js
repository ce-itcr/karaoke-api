let adminClient = require('@keycloak/keycloak-admin-client').default;

const express = require('express');
const cors = require('cors');
const songsRouter = require('./routes/songs');
const {findSong} = require('./shared/database');
const { set } = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/songs', songsRouter);

app.get('/', (req, res) => { return res.status(200).send('Hello World from Karaoke´s API'); });
app.get('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.post('*', (req, res) => { res.status(405).send('Method does not exist'); });
app.put('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.delete('*', (req, res)  => { res.status(405).send('Method does not exist'); });

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

//findSong('Casin');
//createSong('Mr Blue Sky', 'ELO', 'Out Of The Blue',"Hey hey mr blue",'Agustin', '11/09/2021', 'NA', 'NA')

let settings = {
    auth:'true',
    username: 'prueba',
    password: 'prueba',
    grantType: 'password',
    clientId: 'Karaoke'
  };

//adminClient(settings).then((client) => {
//    console.log('client', client);
//    client.users.find('prueba').then((users) => {
//        console.log('Credenciales Correctas')
//        }).catch(err => {
//            console.log('Error encontrando los clientes');
//        });
//    }).catch((err) => {
//        console.log('Credenciales Incorrectas');
//});

const kcAdminClient = new adminClient({baseUrl:'http://localhost:8080/auth', realmName:'KaraokeAuth'}); 

 kcAdminClient.auth(settings);


const users = kcAdminClient.users.find();

console.log(users);