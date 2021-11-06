const express = require('express');
const cors = require('cors');
const songsRouter = require('./routes/songs');
const loginRouter = require('./routes/login');
const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());
app.use(cors());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/karaoke', songsRouter);
app.use('/karaoke', loginRouter)

app.get('/', (req, res) => { return res.status(200).send('Hello World from Karaoke´s API'); });
app.get('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.post('*', (req, res) => { res.status(405).send('Method does not exist'); });
app.put('*', (req, res)  => { res.status(405).send('Method does not exist'); });
app.delete('*', (req, res)  => { res.status(405).send('Method does not exist'); });

app.listen(PORT, () => console.log(`Server running 🚀 on port: ${PORT}...`));
