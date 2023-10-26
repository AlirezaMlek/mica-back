const config = require('../config/dev-config.json')
const Sequelize = require('sequelize');



const postgre_sql = new Sequelize.Sequelize(config.postgre_sql.db, config.postgre_sql.user,
    config.postgre_sql.pass, {
    host: config.postgre_sql.host,
    dialect: 'postgres'
});


module.exports = postgre_sql;