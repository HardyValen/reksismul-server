'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PemberhentianAngkot', {
      id_pemberhentian: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      id_jenis_angkot: {
        type: Sequelize.UUID,
        references: {
          model: 'JenisAngkot',
          key: 'id_jenis_angkot'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      order: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.FLOAT 
      },
      longitude: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PemberhentianAngkot');
  }
};