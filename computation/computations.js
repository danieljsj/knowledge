
var comp = function (sequelize, Unit) {
	this.sequelize = sequelize;
	this.Unit = Unit;
};

comp.gameSetup = function (setupConfigs) {
	this.setupConfigs = setupConfigs;

	Unit = this.Unit;

	Unit.deleteAll();

	for (var i = setupConfigs['num_units'] - 1; i >= 0; i--) {
		units = [];

		atts = [];
		units.push(Unit.create(atts));
	};
	
}