const { countByCompanyCode, getIdByCompanyCode, create, findByName } = require('../repositories/company.repository');

exports.exists = async (id) => {
    const numberOfCompanies = await countByCompanyCode(id);

    return numberOfCompanies.length > 0;
};

exports.getIdByCompanyCode = async (companyCode) => {
    const id = await getIdByCompanyCode(companyCode);

    if (id.length > 0)
        return id[0].id;
}

exports.create = async (company) => {
    await create(company);
}

exports.findByName = async (companyName) => {
    const resultado = await findByName(companyName);

    if(resultado.length > 0) {
        return resultado[0];
    }

    return null; 
}
