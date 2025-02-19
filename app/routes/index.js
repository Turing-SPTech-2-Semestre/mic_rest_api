const express = require('express');

const authRoute = require('./auth.route');
const postRoute = require('./post.route');
const userRoute = require('./user.route')
const machineRoute = require('./machine.route');
const dataMachineRoute = require('./dataMachine.route');
const metricMachineRoute = require('./metricMachine.route')
const companyRoute = require('./company.route');
const dashHilaryRoute = require('./alert.route');
const dashAtividadeRoute = require('./alert.route');

const controller = require('../controllers');
const authorize = require('../middleware/authorize/authorize');

const router = express.Router();

router.get('/',controller.helloController.hello);

router.use('/auth', authRoute);

router.use('/posts', authorize.authorize, postRoute);

router.use('/user', userRoute);

router.use('/machine', authorize.authorize, machineRoute);

router.use('/dataMachine', dataMachineRoute);

router.use('/metricMachine', metricMachineRoute);

router.use('/alerts', authorize.authorize, dashHilaryRoute)

router.use('/alerts', authorize.authorize, dashAtividadeRoute)

router.use('/company', companyRoute);

module.exports = router;