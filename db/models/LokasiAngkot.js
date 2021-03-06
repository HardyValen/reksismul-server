'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LokasiAngkot extends Model {
    static associate(models) {}
  };
  
  LokasiAngkot.init({
    id_lokasi: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    id_angkot: {
      unique: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      references: {
        model: 'Angkot',
        key: 'id_angkot'
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    latitude: {
      type: DataTypes.FLOAT 
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'LokasiAngkot',
    tableName: 'LokasiAngkot',
  });
  return LokasiAngkot;
};