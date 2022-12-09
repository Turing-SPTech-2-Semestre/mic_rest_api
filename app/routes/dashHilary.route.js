const express = require('express');
const controller = require('../controllers');
const { login } = require('../controllers/auth.controller');
const router = express.Router({ mergeParams: true });

router.route('/:companyId')
    .get(controller.alertMachineController.findLastSevenByCompanyOrderByMachine);

module.exports = router;