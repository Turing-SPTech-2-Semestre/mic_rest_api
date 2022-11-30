const { create } = require('../repositories/metricMachine.repository');

exports.create = async (machineId) => {
    return await create(machineId);
}