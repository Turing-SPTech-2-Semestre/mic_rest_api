const { getDate, getTime, getDateSevenDaysAgo, getLastDaysAgo } = require('../helper/data.helper');
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

exports.findLastSevenByCompanyOrderByMachine = (companyId) => {
    return exec(`
        SELECT count(mic_alert_machine.id) as qtd_alerta, fk_machine
		FROM [dbo].[mic_alert_machine]
			JOIN mic_machine
				ON mic_machine.id = fk_machine
				AND fk_company = ${companyId} 
				AND date_insert > '${getDateSevenDaysAgo()} 00:00:00'
		GROUP BY fk_machine;
    `)
}

exports.findAlertByCompanyId  = (companyId, lastDays) => {
    return exec(`
        SELECT component, serial_number, type_alert, date_insert 
		FROM [dbo].[mic_alert_machine]
			JOIN mic_machine
				ON mic_machine.id = fk_machine
				AND fk_company = ${companyId} 
				AND date_insert > '${getLastDaysAgo(lastDays)} 00:00:00';
    `)
}