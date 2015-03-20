var _ = require("lodash");
var mysql = require("mysql");
var Sequelize = require("sequelize");

var sequelize = new Sequelize('knowledge','knowledge','284ssj0932', {
  host: 'localhost',
  dialect: 'mysql',
  pool: { max: 5, min: 0, idle: 10000 },
});


var calculation = function(){
  date = new Date();
  time = date.getTime();
  console.log('yup '+time);
}

setInterval(calculation, 1000);

