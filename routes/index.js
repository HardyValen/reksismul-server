var express = require('express');
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');
var router = express.Router();

const JenisAngkot = require('../db/models/JenisAngkot')(sequelize, DataTypes);
const Angkot = require('../db/models/Angkot')(sequelize, DataTypes);
const LokasiAngkot = require('../db/models/LokasiAngkot')(sequelize, DataTypes);
const PemberhentianAngkot = require('../db/models/PemberhentianAngkot')(sequelize, DataTypes);
const {v4 : uuidv4} = require('uuid')

router.get('/jenis-angkot', function(req, res) {
  JenisAngkot.findAll().then(data => {
    res.send(data)
  })
  .catch((error) => {
    res.status(500).send(error.message)
  })
});

router.post("/lokasi-angkot", async function(req, res) {
  const { id_angkot, latitude, longitude } = req.body;
  const t = await sequelize.transaction();

  try {
    await LokasiAngkot.upsert(
      {
        id_angkot,
        latitude,
        longitude,
      },
      {
        fields: ['id_angkot', 'latitude', 'longitude'],
        transaction: t
      }
    )
  
    await t.commit();
    res.send(`upserted location entry for ${id_angkot}`)
  } catch (error) {
    await t.rollback();
    res.status(500).send(error.message)
  }
  
})

router.delete("/lokasi-angkot", async function(req, res) {
  const { id_angkot } = req.body;
  const t = await sequelize.transaction();

  try {
    await LokasiAngkot.destroy(
      {
        where: { id_angkot },
        transaction: t
      }
    )
    await t.commit();
    res.send(`deleted entry of Angkot with id ${id_angkot}`)
  } catch (error) {
    await t.rollback();
    res.status(500).send(error.message)
  }
})


// {DEPRECATED} PUT /reksismul/data/lokasi-angkot
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

// GET /reksismul/data/lokasi-angkot
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
      },
      transaction: t
    })

    await t.commit();
    res.send(tempData);

  } catch (e) {
    await t.rollback();
    res.status(500).send(e.message)
  }
})

router.post("/angkot", async function(req, res) {
  const {id_angkot, id_jenis_angkot} = req.body;
  const t = await sequelize.transaction();

  try {
    await Angkot.upsert(
      {
        id_angkot,
        id_jenis_angkot
      },
      {
        transaction: t
      }
    )

    await t.commit();
    res.status(200).send(`Angkot ${id_angkot} berjenis ${id_jenis_angkot} berhasil didaftarkan`)

  } catch (error) {
    await t.rollback();
    res.status(500).send(error.message)
  }
})

// DEPRECATED {PUT}, JADI UPSERT SAMA ANGKOT SAJA
router.put("/angkot", async function(req, res) {
  const {id_angkot, id_jenis_angkot} = req.body;
  const t = await sequelize.transaction();

  try {
    await Angkot.update(
      {
        id_jenis_angkot
      },
      {
        where: { 
          id_angkot,
        },
        transaction: t
      }
    )

    await t.commit();
    res.status(200).send(`Angkot ${id_angkot} berjenis ${id_jenis_angkot} berhasil diupdate`)

  } catch (error) {
    await t.rollback();
    res.status(500).send(error.message)
  }
})

router.get("/pemberhentian-angkot", async function(req, res) {
  const {id_jenis_angkot} = req.query;
  PemberhentianAngkot.findAll(
    {
      where: {id_jenis_angkot},
      order: [["order", 'DESC']]
    }
  ).then(data => {
    res.send(data)
  })
  .catch((error) => {
    res.status(500).send(error.message)
  })
})

module.exports = router;
