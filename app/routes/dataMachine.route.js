const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/')
    .post(controller.dataMachineController.insert);

router.route('/metrics/:machineId/:numberOfRows')
    .get(controller.dataMachineController.findLast);

router.route('/user-alert-count/:companyId')
    .get(controller.dataMachineController.getUserAlertCount)

module.exports = router;
