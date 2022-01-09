'use strict';

const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    firstname : String,
    name : String,
    region : String,
    dicipline : String,
    nb_medaille : String
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;