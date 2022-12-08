const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/')
    .post(controller.dataMachineController.insert);

router.route('/dashboard-hilary')
    .get(getTestChartJsPage);

module.exports = router;