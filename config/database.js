const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('first_node', 'root', 'root', {
  host: 'localhost', 
  dialect: 'mysql', 
});

module.exports = sequelize;
