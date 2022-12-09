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
            '${company.companyName}',
            '${company.companyCode}',
            '${company.cnpj}',
            '${company.cep}',
            '${company.numero}',
            '${company.estado}'
        );
    `)
}

exports.getIdByCompanyCode = (companyCode) => {
    return exec(`
        SELECT id
        FROM mic_company
        WHERE company_code = '${companyCode}';
    `)
}

exports.findByName = (machineName) => {
    return exec(`
        SELECT id
        FROM mic_company
        WHERE company_name = '${machineName}';
    `)
}