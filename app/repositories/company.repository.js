const { exec } = require('../database/sqlConfig');
const { generateCompanyCode } = require('../helper/companyCode.helper');

exports.countById = (id) => {
    return exec(`
        SELECT id
        FROM mic_company
        WHERE id = ${id};`
    );
};

exports.countByCompanyCode = (companyCode) => {
    return(`
        SELECT count(id)
        FROM [dbo].[mic_company]
        WHERE company_code = '${companyCode}';
    `)
}

exports.create = (company) => {
    return exec(`
        INSERT INTO mic_company 
        VALUES (
            '${company_name}',
            '${generateCompanyCode()}'
        )
    `)
}

exports.getIdByCompanyCode = (companyCode) => {
    return exec(`
        SELECT id
        FROM mic_company
        WHERE company_code = '${companyCode}';
    `)
}