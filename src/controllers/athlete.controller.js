const Athlete = require('../models/athlete.model');

class AthleteController {
    async list(req, res) {
        const athletes = await Athlete.find();

        res.json({
            count: athletes.length,
            athletes: athletes
        });
    }
    async listPage(req, res){
        const athletes = await Athlete.find();
        res.render('athletes', {athletes});
    }
}

module.exports = AthleteController;
