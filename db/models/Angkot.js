'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Angkot extends Model {
    static associate(models) {}
  };
  
  Angkot.init({
    id_angkot: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    id_jenis_angkot: {
      type: DataTypes.UUID,
      references: {
        model: 'JenisAngkot',
        key: 'id_jenis_angkot'
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
  }, {
    sequelize,
    modelName: 'Angkot',
    tableName: 'Angkot',
    timestamps: false
  });
  return Angkot;
};