module.exports = function (db, Unit) {
	
	var computations = {};

	computations.gameSetup = function () { 

		Unit.remove({},function(err){
			if (err) throw err;
			else {
				console.log("all units removed; inserting new units...");
				Unit.collection.insert([{name:"Joe",x:Math.random(),y:Math.random()},{name:"Jane",x:Math.random(),y:Math.random()}],{},function(err,units){
					if (err) throw err;
					else {
						// console.log(units); // working.
						console.log("units inserted; finding all units...");
												
						Unit.findOne().exec(function(err, unit){
							if (err) throw err;
							else {
								console.log("unit found;");
								console.log(unit);
								unit.fakeMethod();
							}
						});
						Unit.findOne().exec(function(err, unit){
							if (err) throw err;
							else {
								console.log("unit found;");
								console.log(unit);
								unit.fakeMethod();
							}
						});
					};
				});
			}
		});
	};

	computations.gameTick = function () {


		// Unit.find({},function (err, units) {
		// 	if (err) throw err;
		// 	// console.log(units); why not working?

		// 	for (var i = units.length - 1; i >= 0; i--) {
		// 		// console.log(units[i]); // won't work - not totally sure why 
		// 		units[i].move().save(function(err, unit){
		// 		    if(err)
		// 		        console.log(err);
		// 		    else
		// 		        console.log(unit);
		// 		}); // this is happening, but the console must be not firing cuz of somethign async... cuz when I don't assign the method, this yells at me
		// 	};
		// });

	};

	return computations;

}