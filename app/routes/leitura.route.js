const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/:machineId')
    .post(controller.dataMachineController.insert)
    .get(controller.dataMachineController.findById)
module.exports = router;
