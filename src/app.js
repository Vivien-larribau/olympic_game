const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const { v4: uuidv4} = require('uuid');
uuidv4();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index', { name: 'index' });
});
app.listen(port, () => {
    console.log(`OlympicGames listening at http://localhost:${port}`)
});
/*
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test@clusterleanbot.ts4u2.mongodb.net/OlympicGames?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    await client.connect();

    const db = client.db('OlympicGames');
    const collectionSports = db.collection('testAtlethe');
    const sports = await collectionSports.find().toArray();
    sports.forEach(sport => {
        console.log(sport.name);
    });

    try {
        client.close();
    }catch (e) {
        console.log(e);
    }
}

main();*/