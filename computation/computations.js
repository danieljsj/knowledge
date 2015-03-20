module.exports = function (sequelize, Unit) {

	var computations = {};

	computations.gameSetup = function (setupConfigs) {

		this.setupConfigs = setupConfigs;

		Unit.destroy({truncate:true});
		
	}

	computations.gameTick = function () {

		var values = {
			x: Math.floor(30*(1/2-Math.random())),
			y: Math.floor(20*(1/2-Math.random()))
		};
		Unit.create(values); // wait a minute... why is Unit defined here? I didn't inject it into this func... Is it because I pulled it in as a param of the "construction" func?

		Unit.findAndCountAll().success(function (result) {
			console.log("# of units: " + result.count);
		})

		// units = Unit.findAll();
	}

	return computations;

}