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

    client.close();
}

main();