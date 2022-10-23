const express = require("express");
// const { Router } = require('express');

const router = express.Router();
const controller = require('../controller/plant.controller');
const detil = require('../controller/detil.tanaman');
const handleUpload = require('../libs/handleUpload');
const users = require ('../controller/login')


router.get("/tanaman/item",controller.getAll);
router.get("/detil/item/:id",controller.getId);
router.get("/detil/:url",detil.detilTanaman);
router.get("/detil/tanaman/:url",controller.getDetil);
router.post("/",handleUpload.single('img'),controller.create);
router.put("/:id",handleUpload.single('img'),controller.updateId);
router.delete("/:id",controller.deleteId);

router.post("/register/users",users.createUser);
router.post("/login",users.login);
// router.post("/signin",users.signin);

module.exports = router;