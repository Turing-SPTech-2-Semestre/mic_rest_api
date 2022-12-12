const { exec } = require('../database/sqlConfig');

exports.create = (machineId) => {
    return exec(`
        INSERT INTO mic_machine_metrics
        VALUES (
            ${machineId},
            80,
            95,
            80,
            95,
            80,
            95
        )
    `)
}

exports.findByMachineId = (machineId) => {
    return exec(`
        SELECT * FROM [dbo].[mic_machine_metrics]
        WHERE fk_machine = ${machineId};
    `)
}


exports.update = (metric) => {
    console.log(metric);
}
