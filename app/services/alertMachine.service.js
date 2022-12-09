const { insert, findLastSevenByCompanyOrderByMachine, findAlertByCompanyId } = require('../repositories/alertMachine.repository');

exports.validate = async (medidas) => {
    const comp = ["", "ram", "dsk", "cpu"];
    const alertas = [];
    let alert;
    let component;
    let type;

    for (let i = 2; i < medidas.length; i++) {
        component = comp[i];
        type="";

        if (medidas[i] >= 65 && medidas[i] <= 80)
            type="Emergencial";
            
        else if (medidas[i] > 80 && medidas[i] <= 100)
            type="Crítico";

        alert = {
            "fkMachine": medidas[0],
            "component": component,
            "typeAlert": type
        };

        if (type == "Emergencial" || type == "Crítico")
            alertas.push(alert);
    }
    if (alertas.length > 0)
        await insert(alertas);
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