'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Angkot', {
      id_angkot: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Angkot');
  }
};