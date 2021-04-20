'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LokasiAngkot', {
      id_lokasi: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        // unique: true,
        // allowNull: false,
        // primaryKey: true,
      },
      id_angkot: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: 'Angkot',
          key: 'id_angkot'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      latitude: {
        type: Sequelize.FLOAT 
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LokasiAngkot');
  }
};