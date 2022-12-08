const { exec } = require('../database/sqlConfig');
const { getDate, getTime } = require('../helper/data.helper');

exports.insert = (dataMachine) => {
    console.log(`${getDate()} ${getTime()}`);
    return exec(`
        INSERT INTO mic_data_machine
        VALUES(
            ${dataMachine.machineId},
            '${getDate()} ${getTime()}',
            ${dataMachine.ramUsage},
            ${dataMachine.diskUsage},
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

exports.getUserAlertCount = (machineId) => {
    return exec(`
        SELECT
            (SELECT count(id) FROM [dbo].[mic_alert_machine]) AS alert_count,
            (SELECT count(id) FROM [dbo].[mic_user]) AS user_count 
        
	`)
}
