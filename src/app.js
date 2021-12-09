const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// Déclaration des routeurs //
const sportRouter = require('./routers/sport.router');
app.use('/api', sportRouter);
//const athleteRouter = require('./routers/athlete_router');
//app.use('/api', athleteRouter);
//connection to database//
require('./database/mongodb');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { name: 'index' });
});
app.listen(port, () => {
    console.log(`OlympicGames listening at http://localhost:${port} 🚀`)
});
