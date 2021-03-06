const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const Athlete = require("../models/athlete.model");
const athleteController = new AthleteController();

router.get('/athletes', async (req, res) => {
    athleteController.listPage(req,res);
});
router.post('/athletes/post',async (req, res) => {
    const paramAthlete = req.body;
    const athlete = new Athlete({
        firstname: paramAthlete.firstname,
        name: paramAthlete.name,
        region: paramAthlete.region,
        dicipline: paramAthlete.dicipline,
        nb_medaille : paramAthlete.nb_medaille
    });
    await athlete.save();
    res.redirect('/api/athletes');
});

router.get('/athletes/:id', async (req, res) =>{
    const paramAthlete = req.params;
    console.log(paramAthlete.id);
    Athlete.remove({_id: paramAthlete.id}, function (err) {
        if (!err){
            console.log("success");
        }else {
            console.log(err);
        }
    })
    res.redirect('/api/athletes');
})

module.exports = router;