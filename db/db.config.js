const Sequelize = require('sequelize')

let sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PWD, {
    host:process.env.HOST,
    dialect: 'mssql',
    logging: false,
    port: process.env.DB_PORT,
})

module.exports = sequelize