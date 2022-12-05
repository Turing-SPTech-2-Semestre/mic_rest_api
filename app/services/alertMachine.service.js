const { create } = require('./user.service');

exports.validate = async (medidas) => {

    const comp = ["", "ram", "dsk", "cpu"]

    let component = "";
    let type = ""
    

    for (let i = 1; i < medidas.length; i++) {

        component = comp[i];

        if (medidas[i] >= 65 && medidas[i] <= 80)
            type="Emergencial";
            
        else if (medidas[i] > 80 && medidas[i] <= 100)
            type="Crítico";

        let alert = {
            "fkMachine": medidas[0],
            "component": component,
            "typeAlert": type
        }

        await create(alert);
        type=""
        component=""
    }
}
