'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JenisAngkot extends Model {
    static associate(models) {}
  };
  
  JenisAngkot.init({
    id_jenis_angkot: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    nama_jenis: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'JenisAngkot',
    tableName: 'JenisAngkot',
    timestamps: false
  });
  return JenisAngkot;
};