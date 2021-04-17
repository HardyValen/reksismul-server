const { v4: uuidv4 } = require('uuid');
'use strict'

const idToUUID = (id) => {
  switch (id) {
    case 25:
      return "7a77266c-af28-4b0d-83f1-e7cdb6635723"
      break;

    case 10:
      return "2c8dad94-8e60-4d93-8c03-c3499444f7d5"
      break;
  
    default:
      return 0
      break;
  }
}

const ObjectPemberhentianAngkot = [
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 1,
    latitude:-6.2600545,
    longitude:106.9953933,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 2,
    latitude:-6.2191171,
    longitude:106.9501725,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 1,
    latitude:-6.2494774,
    longitude:107.0112124,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 2,
    latitude:-6.1902973,
    longitude:107.0172309,
  }
]

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("PemberhentianAngkot", ObjectPemberhentianAngkot)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'PemberhentianAngkot', null, {truncate: true}
    );
  }
}