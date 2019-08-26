const Sequelize = require('sequelize');


module.exports = new Sequelize('Native3', 'postgres', 'Mkonji123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5555,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});