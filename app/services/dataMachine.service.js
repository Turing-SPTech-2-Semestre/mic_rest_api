const { insert, findLast, getUserAlertCount } = require('../repositories/dataMachine.repository'); 

exports.insert = async (machine) => {
    await insert(machine)
};

exports.findLast = async (machineId, numberOfRows) => {
    const resultado = await findLast(machineId, numberOfRows);

    if (resultado.length > 0) {
        return resultado
    }
    
    return [];
}

exports.getUserAlertCount = async (machine) => {
    const resultado = await getUserAlertCount();

    if (resultado.length > 0)
        return resultado[0];
    
    return null;
}