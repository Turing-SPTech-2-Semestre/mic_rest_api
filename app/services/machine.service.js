const { findBySerialNumber, create, findById, findByCompany } = require('../repositories/machine.repository');

exports.exists = async (serialNumber) => {
    const machines = await findBySerialNumber(serialNumber);
    
    return machines.length > 0;
};

exports.create = async (user) => {
    await create(user);
};

exports.findById = async (machineId) => {
    const resultado = await findById(machineId);

    if (resultado.length > 0) {
        return resultado[0];
    }

    return null;
}

exports.findByCompany = async (companyId) => {
    return await findByCompany(companyId);
}