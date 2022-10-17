const express = require("express");
// const { Router } = require('express');

const router = express.Router();
const controller = require('../controller/plant.controller');
const detil = require('../controller/detil.tanaman');
const handleUpload = require('../libs/handleUpload');


router.get("/tanaman/item",controller.getAll);
router.get("/detil/item/:id",controller.getId);
router.get("/detil/:url",detil.detilTanaman);
router.get("/detil/tanaman/:url",controller.getDetil);
router.post("/",handleUpload.single('img'),controller.create);
router.put("/:id",handleUpload.single('img'),controller.updateId);
router.delete("/:id",controller.deleteId);

module.exports = router;