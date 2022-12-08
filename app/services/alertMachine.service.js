const { insert } = require('../repositories/alertMachine.repository');

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

    await insert(alertas);
};
