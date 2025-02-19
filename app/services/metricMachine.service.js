const { create, findByMachineId, update } = require('../repositories/metricMachine.repository');

exports.create = async (machineId) => {
    return await create(machineId);
}

exports.findByMachineId = async (machineId) => {
   let resultado = await findByMachineId(machineId);

   if(resultado.length > 0) {
    return resultado[0];
   }

  return false; 
}

exports.update = async (metric) => {
    return await update(metric);
}