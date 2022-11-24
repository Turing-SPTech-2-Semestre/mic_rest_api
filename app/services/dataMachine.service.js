const { insert, findLast } = require('../repositories/dataMachine.repository'); 

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