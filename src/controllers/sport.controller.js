const Sport = require('../models/sport.model');;

class SportController {
    async list(req, res) {
        const sports = await Sport.find();

        res.json({
            count: sports.length,
            sports: sports
        });
    }
    async listPage(req, res){
        const sports = await Sport.find();
        res.render('sports', {sports});
    }
}

module.exports = SportController;
