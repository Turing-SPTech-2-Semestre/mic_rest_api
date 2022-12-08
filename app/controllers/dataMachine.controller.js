const { dataMachineService, machineService, alertMachineService, companyService } = require('../services/index');

exports.insert = async (req, res) => {
    try {
        const { 
            machineId,
            ramUsage,
            diskUsage,
            cpuPercent
         } = req.body

        if (machineId && ramUsage && diskUsage && cpuPercent) {
            const maquina = await machineService.findById(machineId);
            
            if (!maquina) {
                return res.status(404).send("Essa máquina ainda não foi cadastrada");
            }

            await alertMachineService.validate([machineId, ramUsage, diskUsage, cpuPercent]);
            await dataMachineService.insert(req.body);
            res.status(201).send("Informação inserida com sucesso.");
        }
        else {
            res.status(404).send("Faltam dados para inserir no banco");    
        }
    } 
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao inserir os dados de leitura");
    }
}

exports.findLast = async (req, res) => {
    try {
        const { machineId, numberOfRows } = req.params;    
        
        const machine = await machineService.findById(machineId);

    if (!machine) {
        return res.status(404).send("Máquina não encontrada");
    }

    const data_machine = await dataMachineService.findLast(machineId, numberOfRows)
    
    res.send(data_machine);
}
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao buscar as medidas");
    }
}

exports.getUserAlertCount = async (req, res) => {
    try {
        const { companyId } = req.params;

        const resultado = await dataMachineService.getUserAlertCount(companyId);

        if (resultado) {
            res.status(200).json(resultado);
        }
        else {
            res.status(404).send("Não foi possível achar a empresa");
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao buscar as medidas");
    } 
}
