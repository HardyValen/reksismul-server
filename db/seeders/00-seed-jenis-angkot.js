const { v4: uuidv4 } = require('uuid');
'use strict'

const ObjectAngkot = [
  {
    id_jenis_angkot: "7a77266c-af28-4b0d-83f1-e7cdb6635723",
    nama_jenis: "KOASI K25 Pulo Gebang - Rawa Panjang",
  },
  {
    id_jenis_angkot: "2c8dad94-8e60-4d93-8c03-c3499444f7d5",
    nama_jenis: "KOASI K10 Ujung Harapan - Terminal Bekasi"
  }
]

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("JenisAngkot", ObjectAngkot)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'JenisAngkot', null, {truncate: true}
    );
  }
}