const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/')
    .post(controller.userController.create);

module.exports = router;
