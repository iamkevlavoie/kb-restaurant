// Setting up our database connection
const Sequelize = require('sequelize');
// const config = new Sequelize("us-cdbr-east-06.cleardb.net", "b9846cf2430783", "0a51bd00","heroku_dc12a844a558ec6", {dialect: 'mysql'});
const config = new Sequelize({
    username: 'b9846cf2430783',
    password: '0a51bd00',
    database:'heroku_dc12a844a558ec6',
    host:'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    operatorsAliases: '0'

    });


module.exports = config; 