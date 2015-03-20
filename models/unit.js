var Unit = sequelize.define('unit', {
	x: {
		type: Sequelize.INTEGER,
		field: 'x'
	},
	y: {
		type: Sequelize.INTEGER,
		field: 'y'
	}
}, {
	freezeTableName: true
});

Unit.sync({force: true}).then(function(){});


// user create, get, etc. will be provided by sequelize


// Unit.prototype.someFunc = function () {
// 	//...
// }


module.exports = Unit;