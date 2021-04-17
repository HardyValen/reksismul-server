const { v4: uuidv4 } = require('uuid');
'use strict'

const ObjectAngkot = [
  {
    id_angkot: "1c000691-44ed-430a-85ee-6c929367dc2d",
    id_jenis_angkot: "7a77266c-af28-4b0d-83f1-e7cdb6635723",
  },
  {
    id_angkot: "c9936ba6-0763-463f-a06b-0d604df7de63",
    id_jenis_angkot: "2c8dad94-8e60-4d93-8c03-c3499444f7d5"
  },
  {
    id_angkot: "00b37357-8549-47f3-8e66-ad3dafce8788",
    id_jenis_angkot: "2c8dad94-8e60-4d93-8c03-c3499444f7d5"
  }
]

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Angkot", ObjectAngkot)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'Angkot', null, {truncate: true}
    );
  }
}