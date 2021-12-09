const mongoose = require('mongoose');

const uri = "mongodb+srv://test:test@cluster0.wp1ua.mongodb.net/OlympicGames?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function() {
    console.log('Connected to the database! ✅');
});
