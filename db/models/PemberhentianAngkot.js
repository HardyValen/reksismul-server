'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PemberhentianAngkot extends Model {
    static associate(models) {}
  };
  
  PemberhentianAngkot.init({
    id_pemberhentian: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      primaryKey: true,
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
    order: {
      type: DataTypes.INTEGER
    },
    latitude: {
      type: DataTypes.FLOAT 
    },
    longitude: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'PemberhentianAngkot',
    tableName: 'PemberhentianAngkot',
    timestamps: false
  });
  return PemberhentianAngkot;
};