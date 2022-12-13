const { insert, findLastSevenByCompanyOrderByMachine, findAlertByCompanyId, findAlertByUserName } = require('../repositories/alertMachine.repository');
const cardPipefyService = require('../services/cardPipefy.service');

exports.validate = async (medidas, metrics) => {
    const comp = ["", "ram", "dsk", "cpu"];
    const metr = ["", {"medium":metrics.ramMedium, "max":metrics.ramMax}, {"medium": metrics.diskMin, "max":metrics.disMax}, {"medium":metrics.cpuMedium, "max":metrics.cpuMax}];
    const alertas = [];
    let alert;
    let component;
    let type;

    console.log(medidas[1] >= metr[1].medium)
    for (let i = 1; i < medidas.length; i++) {
        component = comp[i];
        type="";

        if (medidas[i] >= metr[i].medium && metr[i] < metr[i].max)
            type="Emergencial";
            
        else if (medidas[i] <= 100)
            type="Crítico";

        alert = {
            "fkMachine": medidas[0],
            "component": component,
            "typeAlert": type
        };

        if (type == "Emergencial" || type == "Crítico")
            alertas.push(alert);
    }

    if (alertas.length > 0) {
        await insert(alertas);
        await cardPipefyService.create(alertas);
    }
        
};

exports.findLastSevenByCompanyOrderByMachine = async (machineId) => {
    const resultado = await findLastSevenByCompanyOrderByMachine(machineId);

    if (resultado.length > 0) {
        return resultado;
    }

    return [];
}

exports.findAlertByCompanyId = async (companyId, lastDays) => {
    const resultado = await findAlertByCompanyId(companyId, lastDays);

    if (resultado.length > 0) {
        return resultado;
    }

    return [];
}

exports.findAlertByUserName = async (companyFk, lastDays) => {
    const resultado = await findAlertByUserName(companyFk, lastDays);

    if (resultado.length > 0) {
        return resultado;
    }

    return [];
}