const { dataMachineService, machineService, alertMachineService } = require('../services/index');

const { insert } = require('../repositories/dataMachine.repository')

exports.insert = async (req, res) => {
    try {
        const { 
            machineId,
            ramUsage,
            diskUsage,
            cpuFreq,
            cpuPercent
         } = req.body

        if (machineId && ramUsage && diskUsage && cpuFreq && cpuPercent) {
            
            const maquina = await machineService.findById(machineId)  
            
            if (!maquina) {
                return res.status(404).send("Essa máquina ainda não foi cadastrada")
            }
           
            // await alertMachineService.validate([ramUsage, diskUsage, cpuFreq, cpuPercent]);
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
