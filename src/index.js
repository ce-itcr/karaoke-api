const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');
const songsRouter = require('./routes/songs');

const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/karaoke', songsRouter);

app.get('/', (req, res) => { return res.status(200).send('Hello World from Karaoke´s API'); });
app.get('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.post('*', (req, res) => { res.status(405).send('Method does not exist'); });
app.put('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.delete('*', (req, res)  => { res.status(405).send('Method does not exist'); });

app.use('/', router);

module.exports.handler = serverless(app);