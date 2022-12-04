const { create } = require('./user.service');

exports.validate = async (medidas) => {

    let component = "";
    let type = ""

    for (let i = 1; i < medidas.length; i++) {
        if(i == 1)
            component = "Ram";
            
        else if (i == 2)
            component = "Disco";

        else if (i == 3 || i == 4)
            component = "Cpu";

        if (medidas[i] >= 65 && medidas[i] <= 80)
            type="Emergencial";
            
        else if (medidas[i] > 80 && medidas[i] <= 100)
            type="Crítico";

        let alert = {
            "fkMachine": medidas[0],
            "component": component,
            "typeAlert": type
        }

        if (type != "")    
            console.log("OIeeee")
            console.log(medidas[i])
            await create(alert);
        type=""
        component=""
    }
}
