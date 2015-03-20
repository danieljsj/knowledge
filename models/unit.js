var Unit = function(data) {
	this.data = data;
};

Unit.prototype.data = {};

Unit.prototype.someFunc = function () {
	//...
}

Unit.findById = function (db, id, callback) {
	
	db.get('units'), {'id':id}).run(function (err, data) {
	
		if (err) return callback(err);
	
		callback(null, new Unit(data));
	
	});
};

Unit.deleteAll = function () {
	//...
}