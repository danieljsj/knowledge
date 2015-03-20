module.exports = function (sequelize, Unit) {

	var computations = {};

	computations.gameSetup = function () { 
		var setupConfigs = {}; // should abstract me some setup configs
		setupConfigs.numUnits = 10;

		Unit.destroy({truncate:true});

		for (var i = setupConfigs.numUnits - 1; i >= 0; i--) {

			var values = {
				x: Math.floor(30*(1/2-Math.random())),
				y: Math.floor(20*(1/2-Math.random()))
			};

			Unit.create(values); // wait a minute... why is Unit defined here? I didn't inject it into this func... Is it because I pulled it in as a param of the "construction"/".exports" func?
		};

		Unit.findAndCountAll().success(function (result) {
			console.log("# of units: " + result.count);
		});
		
	}

	computations.gameTick = function () {
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");//

		// units = Unit.findAll();

		// console.log(units);

		unit = Unit.findOne();

		// for (unit in units) {

			unit.x += Math.round(-1+2*Math.random());
			unit.y += Math.round(-1+2*Math.random());
			
			unit.save(); // promise has no method save... must use the then! this is a promise!
			
			console.log("x: "+unit.x+" y: "+unit.y);
		// };

		

	}

	return computations;

}