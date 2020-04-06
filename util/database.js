const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-course', 'root', 'Swizzle123##', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
