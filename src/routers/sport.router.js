const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const SportController = require('../controllers/sport.controller');
const Sport = require("../models/sport.model");
const sportController = new SportController();

router.get('/sports', async (req, res) => {
    sportController.listPage(req, res);
    //sportController.list();
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
