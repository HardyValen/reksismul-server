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
    latitude:-6.2567324,
    longitude:106.9855036,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 3,
    latitude:-6.249313,
    longitude:106.992100,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 4,
    latitude:-6.246910,
    longitude:106.992515,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 5,
    latitude:-6.233743,
    longitude:106.992974,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 6,
    latitude:-6.226021,
    longitude:106.980017,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 7,
    latitude:-6.219746,
    longitude:106.973826,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 8,
    latitude:-6.209585,
    longitude:106.977802,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 9,
    latitude:-6.194122,
    longitude:106.972894,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 10,
    latitude:-6.187521,
    longitude:106.959362,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 11,
    latitude:-6.205457,
    longitude:106.955299,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 12,
    latitude:-6.212752,
    longitude:106.955814,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(25),
    order: 13,
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
    latitude:-6.247924,
    longitude:107.011320,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 3,
    latitude:-6.249477,
    longitude:107.011305,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 4,
    latitude:-6.249221,
    longitude:107.006844,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 5,
    latitude:-6.254892,
    longitude:107.004068,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 6,
    latitude:-6.246868,
    longitude:106.992384,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 7,
    latitude:-6.233700,
    longitude:106.993098,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 8,
    latitude:-6.225978,
    longitude:106.979912,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 9,
    latitude:-6.219552,
    longitude:106.973722,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 10,
    latitude:-6.209481,
    longitude:106.977744,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 11,
    latitude:-6.195730,
    longitude:106.973723,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 12,
    latitude:-6.197927,
    longitude:106.987059,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 13,
    latitude:-6.199869,
    longitude:106.996973,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 14,
    latitude:-6.197573,
    longitude:106.997352,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 15,
    latitude:-6.188848,
    longitude:106.999298,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 16,
    latitude:-6.189497,
    longitude:107.004760,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 17,
    latitude:-6.189436,
    longitude:107.008523,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 18,
    latitude:-6.189557,
    longitude:107.015154,
  },
  {
    id_pemberhentian: uuidv4(),
    id_jenis_angkot: idToUUID(10),
    order: 19,
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