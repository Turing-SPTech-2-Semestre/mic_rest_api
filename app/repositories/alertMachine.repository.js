const { getDate, getTime } = require('../helper/data.helper');
const { exec } = require('../database/sqlConfig');

exports.insert = (alert) => {
    return exec(`
        INSERT INTO mic_alert_machine
        VALUES (
            ${alert.fkMachine},
            '${getDate()} ${getTime()}',
            '${alert.component}',
            '${alert.typeAlert}'
        );
    `)
}
