var _ = require("lodash");
var mysql = require("mysql");
var Sequelize = require("sequelize");
var Computations = require("./computations");
var UnitModel = require("../models/unit");


var sequelize = new Sequelize('knowledge','knowledge','284ssj0932', {
  host: 'localhost',
  dialect: 'mysql',
  pool: { max: 5, min: 0, idle: 10000 },
});

var Unit = new UnitModel(Sequelize, sequelize);

var computations = new Computations(sequelize, Unit);

computations.gameSetup();

setInterval(computations.gameTick, 1000);