const { findBySerialNumber, create, findById, findByCompany } = require('../repositories/machine.repository');

exports.exists = async (serialNumber) => {
    const machine = await findBySerialNumber(serialNumber);
    
    if (machine.length > 0) {
        return machine[0].id
    }
    
    console.log("Oiads")
    return null
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