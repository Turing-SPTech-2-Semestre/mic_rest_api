const express = require('express');
const { generateCompanyCode } = require('../helper/companyCode.helper');
const router = express.Router();
const controller = require('../controllers/index');

router.route("/")
    .post(controller.companyController.create);

router.route('/code')
    .get((req, res) => {
        res.status(200).send(generateCompanyCode());
    })

module.exports = router;