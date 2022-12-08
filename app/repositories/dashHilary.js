const { exec } = require('../database/sqlConfig');
const { generateCompanyCode } = require('../helper/companyCode.helper');

exports.countById = (fk_empresa) => {
    return exec(`
        SELECT * FROM alert_machine WHERE fk_empresa = ${fk_empresa};`
    );
};

