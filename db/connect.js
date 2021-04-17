const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db-config.json")

// Change connection type
const connType = "development"

const sequelize = new Sequelize(
  dbConfig[connType].database,
  dbConfig[connType].username,
  dbConfig[connType].password,
  {
    host: dbConfig[connType].host,
    dialect: dbConfig[connType].dialect,
    timezone: "+07:00"
  }
)

module.exports = sequelize