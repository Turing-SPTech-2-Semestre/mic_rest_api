const express = require('express');

const authRoute = require('./auth.route');
const postRoute = require('./post.route');
const userRoute = require('./user.route')
const machineRoute = require('./machine.route');
const dataMachineRoute = require('./dataMachine.route');
const companyRoute = require('./company.route');
const dashHilaryRoute = require('./dashHilary.route');

const controller = require('../controllers');
const authorize = require('../middleware/authorize/authorize');

const router = express.Router();


router.get('/',controller.helloController.hello);

router.use('/auth', authRoute);

router.use('/posts', authorize.authorize, postRoute);

router.use('/user', userRoute);

router.use('/machine', authorize.authorize, machineRoute);

router.use('/dataMachine', dataMachineRoute);

router.use('/dashHilary', dashHilaryRoute)

router.use('/company', companyRoute);

module.exports = router;