/// Deps

var mongoose = require("mongoose");
var _ = require("lodash");


/// Model Attributes

var modelName = "Unit";

var properties = {
		name: {type: String, default: "Jo' Doe"},
		x: Number,
		y: Number
};

var methods = {
	init: function() {
		if (! this.x) this.x = _.random(-30,30);
		if (! this.y) this.y = _.random(-20,20);
		return this;
	},
	move: function() { 
		this.x += _.random(-1,1);
		this.y += _.random(-1,1);
		return this;
	},
	shareKnowledge: function(recipient) {
		//
		return this;
	},
	sayName: function() {
		console.log(this.name);
		return this;
	}
};

/// Creating the Model

schema = mongoose.Schema(properties);
for ( var attName in methods ) { schema.methods[attName] = methods[attName];}
model = mongoose.model(modelName, schema);

module.exports = model;