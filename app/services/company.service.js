const { countByCompanyCode, getIdByCompanyCode, create } = require('../repositories/company.repository');

exports.exists = async (id) => {
    const numberOfCompanies = await countByCompanyCode(id);

    return numberOfCompanies.length > 0;
};

exports.getIdByCompanyCode = async (companyCode) => {
    const id = await getIdByCompanyCode(companyCode);

    if (id.length > 0)
        return id[0];
}

exports.create = async (company) => {
    await create(company);
    return company.
}