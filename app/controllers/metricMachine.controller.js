const { machineService, metricMachineService } = require('../services/index');

exports.update = async (req, res) => {
    try {
        const { machineId, ramUsage, diskUsage, cpuPercent } = req.body

        if (machineId && ramUsage && diskUsage && cpuPercent) {
            const machineExists = await machineService.exists(machineId);

            if(machineExists) {
                await metricMachineService.update(req.body);

                res.status(204).send("Métrica atualizada com sucesso");
            }
            else {
                res.status(403).send("Essa máquina não existe");
            }
        }
        else {
            res.status(404).send("Faltam dados para atualizar as métricas");    
        }
    } 
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao inserir os dados de leitura");
    }
}

