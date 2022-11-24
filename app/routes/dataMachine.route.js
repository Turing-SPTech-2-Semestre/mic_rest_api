const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/')
    .post(controller.dataMachineController.insert);

router.route('/:machineId/:numberOfRows')
    .get(controller.dataMachineController.findLast);
    
module.exports = router;
