var _ = require("lodash");
var chance = require("chance");
var mongodb = require("mongodb");
var mongoUrl = "mongodb://localhost:27017/knowledge";
var mongoose = require("mongoose");
mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on("error", console.error.bind("console", "connection error:"));
db.once("open", function(callback) {
	console.log("connection opened");
});

var Computations = require("./computations");
var Unit = require("./models/unit");


var computations = new Computations(db, Unit);

computations.gameSetup();

// setInterval(function() {computations.gameTick(Unit)}, 1000);

computations.gameTick(Unit);
computations.gameTick(Unit);
computations.gameTick(Unit);
computations.gameTick(Unit);