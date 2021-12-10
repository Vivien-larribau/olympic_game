const express = require('express');
const router = express.Router();

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports', async (req, res) => {
    sportController.listPage(req, res);
    //sportController.list();
});

module.exports = router;
