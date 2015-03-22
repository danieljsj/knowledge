var _ = require("lodash");
var Chance = require("chance"); var chance = new Chance();

module.exports = function (db, Unit) {
	

	var computations = {};

	var stardate = 0;

	computations.gameSetup = function () { 

		var callback = function(){console.log("all units removed");};
		Unit.remove({},callback);
		// Unit.collection.find()
		var numUnits = 10;
		var docs = [];
		for (var i = numUnits - 1; i >= 0; i--) {
			docs.push({
				name: chance.first()+" "+chance.last(),
				x: _.random(-30,30),
				y: _.random(-30,30),
			});
		};
		Unit.collection.insert(docs,{},function(err,units){
			if (err) throw err;
			else {
				console.log(units);
			};
		}); // wait a minute... why is Unit defined here? I didn't inject it into this func... Is it because I pulled it in as a param of the "construction"/".exports" func?
		
	}

	computations.gameTick = function () {
		// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");//

		console.log(stardate++);
		
		Unit.find({},function (err, units) {
			if (err) throw err;
			// console.log(units); why not working?

			for (var i = units.length - 1; i >= 0; i--) {
				// console.log(units[i]); // won't work - not totally sure why 
				units[i].move().save(function(err){
				    if(err)
				        console.log(err);
				    else
				        console.log(todo);
				}); // this is happening, but the console must be not firing cuz of somethign async... cuz when I don't assign the method, this yells at me
			};
		});


		// 	for (var i = units.length - 1; i >= 0; i--) {
				
		// 		unit = units[i];

		// 		unit.x += Math.round(-1+2*Math.random());
		// 		unit.y += Math.round(-1+2*Math.random());
				
		// 		// unit.save();
				
		// 	};
		// });

	};

	return computations;

}