const express = require('express');
const router = express();
const woodsCtrl = require("../controllers/woods.js");

router.get('/', woodsCtrl.readAll);
router.get('/:hardness', woodsCtrl.findByHardness);

module.exports = router;