const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');


const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  product_description: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'products',
  timestamps: false
});

module.exports = Product;
