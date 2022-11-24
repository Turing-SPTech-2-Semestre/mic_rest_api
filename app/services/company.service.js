const { countById } = require('../repositories/company.repository');

exports.exists = async (id) => {
    const numberOfCompanies = await countById(id);

    return numberOfCompanies.length > 0;
};

exports.create = async (company) => {
    await this.create(company);
}