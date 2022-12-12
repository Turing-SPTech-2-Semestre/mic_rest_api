const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/')
    .put(controller.metricMachineController.update);

module.exports = router;
