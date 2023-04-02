const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecomm_back', 'ecomm_back', 'ecomm_back', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;
