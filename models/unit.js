module.exports = function (Sequelize, sequelize) {

	var Unit = sequelize.define('unit', {
		x: {
			type: Sequelize.INTEGER, // tutorials have this as the class, e.g. if the a static global was available... but we don't have that so I'm using the instance.... hope it has it!
			field: 'x'
		},
		y: {
			type: Sequelize.INTEGER,
			field: 'y'
		}
	}, {
		freezeTableName: true
	});

	Unit.sync(/*{force: true}*/).then(function(){});


	// user create, get, etc. will be provided by sequelize


	// Unit.prototype.someFunc = function () {
	// 	//...
	// }

	return Unit;
}