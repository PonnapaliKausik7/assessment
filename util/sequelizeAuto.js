const SequelizeAuto = require('sequelize-auto');

const sequelizeAuto = new SequelizeAuto('node','root','Qwerty1234', {dialect: 'mysql', host: 'localhost'})  ;

module.exports = sequelizeAuto;