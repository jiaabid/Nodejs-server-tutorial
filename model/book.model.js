const { DataTypes } = require('sequelize')
const db = require('../db/db.config')

const bookModel = db.define('books', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamp:true
})
db.sync();
module.exports = bookModel