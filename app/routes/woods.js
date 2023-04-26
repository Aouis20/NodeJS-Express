const express = require('express');
const auth = require("../middleware/auth.js")
const router = express();
const woodsCtrl = require("../controllers/woods.js");

// En ajoutant auth aux routes, on les protègent => Il faut être connecté pour y accéder

router.get('/', auth, woodsCtrl.readAll);
router.get('/:hardness', auth, woodsCtrl.findByHardness);

module.exports = router;