const { getDate, getTime } = require('../helper/data.helper');
const { exec } = require('../database/sqlConfig');

exports.insert = (alertas) => {
    let instrucao = `
        INSERT INTO mic_alert_machine
        VALUES 
    `;

    for (let i in alertas) {
        instrucao += `(${alertas[i].fkMachine}, '${getDate()} ${getTime()}', '${alertas[i].component}', '${alertas[i].typeAlert}'),`;
    }

    instrucao = instrucao.substring(0, instrucao.length-1);

    return exec(instrucao);
}
