const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/')
    .post(controller.machineController.create);

router.route('/:machineId')
    .get(controller.machineController.findById);

router.route('/company/:companyId')
    .get(controller.machineController.findByCompany);    

module.exports = router;
