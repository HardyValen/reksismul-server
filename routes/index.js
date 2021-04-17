var express = require('express');
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');
var router = express.Router();

const JenisAngkot = require('../db/models/JenisAngkot')(sequelize, DataTypes);
const Angkot = require('../db/models/Angkot')(sequelize, DataTypes);
const LokasiAngkot = require('../db/models/LokasiAngkot')(sequelize, DataTypes);
const PemberhentianAngkot = require('../db/models/PemberhentianAngkot')(sequelize, DataTypes);
const {v4 : uuidv4} = require('uuid')

Angkot.hasOne(JenisAngkot, {
  foreignKey: "id_jenis_angkot"
})

router.get('/jenis-angkot', function(req, res) {
  JenisAngkot.findAll().then(data => {
    res.send(data)
  })
  .catch((error) => {
    res.status(500).send(error.message)
  })
});

router.post("/lokasi-angkot", function(req, res) {
  const { id_angkot } = req.body;
  LokasiAngkot.create({
    id_lokasi: uuidv4(),
    id_angkot: id_angkot,
    latitude: null,
    longitude: null,
  })
  .then(() => {
    res.send(`created new entry for ${id_angkot}`)
  })
  .catch((error) => {
    res.status(500).send(error.message)
  })
})

router.put("/lokasi-angkot", function(req, res) {
  const {id_angkot, latitude, longitude} = req.body;

  LokasiAngkot.update(
    {
      latitude,
      longitude
    },
    {where: {id_angkot}}
  ).then(() => {
    res.send(`updated LokasiAngkot for angkot ${id_angkot}`)
  }).catch((error) => {
    res.status(500).send(error.message)
  })
})

router.get("/lokasi-angkot", async function(req, res) {
  const {id_jenis_angkot} = req.query;

  const t = await sequelize.transaction();

  try {
    let tempAngkot = await Angkot.findAll({
      where: {id_jenis_angkot},
      attributes: ["id_angkot"]
    })
    .then(entries => {
      let temp = []
      entries.forEach(entry => {
        temp.push(entry.id_angkot)
      })

      return temp;
    })

    let tempData = await LokasiAngkot.findAll({
      where: {
        id_angkot: tempAngkot
      }
    })

    await t.commit();
    res.send(tempData);

  } catch (e) {
    await t.rollback();
    res.status(500).send(e.message)
  }
})

router.get("/ping", (req, res) => {
  res.status(200).send("pong")
})

module.exports = router;
