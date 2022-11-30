const { exec } = require('../database/sqlConfig');
const { getDate, getTime } = require('../helper/data.helper');

exports.insert = (dataMachine) => {
    return exec(`
        INSERT INTO mic_data_machine
        VALUES(
            ${dataMachine.machineId},
            '${getDate() + " " +getTime()}',
            ${dataMachine.ramUsage},
            ${dataMachine.diskUsage},
            ${dataMachine.cpuFreq},
            ${dataMachine.cpuPercent}
        );`
    )
}

exports.findLast = (machineId, numberOfRows) => {
    return exec(`
        SELECT TOP ${numberOfRows} * 
        FROM mic_data_machine
        WHERE fk_machine = ${machineId} 
        ORDER BY id DESC;
    `)
}
