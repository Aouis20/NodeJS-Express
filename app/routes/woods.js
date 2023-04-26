const express = require('express');

const router = express();
const woodsCtrl = require("../controllers/woods.js");

// Middleware
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')

// En ajoutant auth aux routes, on les protègent => Il faut être connecté pour y accéder

router.get('/', auth, woodsCtrl.readAll);
router.get('/:hardness', auth, woodsCtrl.findByHardness);
router.post("/", auth, multer, woodsCtrl.create);

module.exports = router;