const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });
const { authorize } = require('../middleware/authorize/authorize');

router.route('/login')
    .post(controller.authController.login);

router.route('/token')
    .post(controller.authController.token);

router.route('/logout/:token')
    .delete(controller.authController.logout);

router.route('/isLogged')
    .get(authorize, controller.authController.isLogged);

module.exports = router;
