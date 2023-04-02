const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  first: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;