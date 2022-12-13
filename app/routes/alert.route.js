const express = require('express');
const controller = require('../controllers');
const { login } = require('../controllers/auth.controller');
const router = express.Router({ mergeParams: true });

router.route('/find-by-company/:companyId')
    .get(controller.alertMachineController.findLastSevenByCompanyOrderByMachine);

router.route('/find-alerts/:companyId/:lastDays')
    .get(controller.alertMachineController.findAlertByCompanyId)

    //r
    router.route('/count-by-user/:companyFk/:lastDays')
    .get(controller.alertMachineController.findAlertByUserName)

module.exports = router;