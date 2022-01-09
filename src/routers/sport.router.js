const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const SportController = require('../controllers/sport.controller');
const Sport = require("../models/sport.model");
const Athlete = require("../models/athlete.model");
const sportController = new SportController();

router.get('/sports', async (req, res) => {
    sportController.listPage(req, res);
});

router.post('/sports/post', async (req,res)=>{
    const paramSport = req.body;
    const sport = new Sport({
        name: paramSport.name,
        category: paramSport.category
    });
    await sport.save();
    res.redirect('/api/sports');
})

router.post('/sports/athletes/', async (req, res)=>{
    const paramSport = req.params;
    const id_athlete = mongoose.Types.ObjectId("61b31c53c396268712855df0");
    //const athlete = await Athlete.findById(id_athlete);
    //console.log(athlete);
    let id = "61b31c53c396268712855df0";
    var hex = /[0-9A-Fa-f]{6}/g;
    id = (hex.test(id))? ObjectId(id) : id;
    Athlete.findOne({'_id':new ObjectID(id)}, function(error,doc) {
        if (error) {
            callback(error);
        } else {
            callback(null, doc);
        }
    });
    /*if(!athlete){
        res.status(404);
        console.log("No athlete found");
    };
    const id_sport = mongoose.Types.ObjectId("61b367127476f00687a85a85");
    const sport = await Sport.findById(id_sport);
    try{
        Sport.updateOne({_id: id_sport}, {
            athletes: athlete
        });
    }catch (e) {
        console.log(e);
    }*/

})

router.get('/sports/:id', async (req,res)=>{
    const paramSport = req.params;
    console.log(paramSport.id);
    Sport.remove({ _id: paramSport.id }, function(err) {
        if (!err) {
            console.log("success");
        }
        else {
            console.log(err);
        }
    })
    res.redirect('/api/sports');
})


module.exports = router;
