const { exec } = require('../database/sqlConfig');

exports.create = (machineId) => {
    return exec(`
        INSERT INTO mic_metric_machine
        VALUES (
            ${machineId},
            80,
            80,
            80,
            80
        )
    `)
}
