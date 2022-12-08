const { companyService, machineService, metricMachineService } = require('../services/index');

exports.create = async (req, res) => {
    try {
        const {   
            companyId, 
            serialNumber, 
            ramCapacity,
            diskCapacity,
            cpuCapacity,
            cpuLogicalPorts 
        } = req.body
        if (companyId && serialNumber && ramCapacity && diskCapacity && cpuCapacity && cpuLogicalPorts) {
            const companyExists = await companyService.exists(companyId); 
           
            console.log(companyId)
            console.log(serialNumber);
            console.log(ramCapacity);
            console.log(diskCapacity);
            console.log(cpuCapacity);
            console.log(cpuLogicalPorts);

            if (!companyExists) {
                return res.status(404).send("Empresa não encontrada")
            }
            
            const machine = await machineService.exists(serialNumber);

            if (machine) {
                return res.status(403).send(`${machine.id}`);
            }

            await machineService.create(req.body);
            await metricMachineService.create(companyId);

            res.status(201).send('Máquina cadastrada com sucesso');
        }
        else {
            res.status(400).send("Faltam informações para realizar o cadastro");
        }
        
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao realizar o cadastro"); 
    }
}

exports.findById = async (req, res) => {
    try {
        const { machineId } = req.params;
        
        const machine = await machineService.findById(machineId);

        if (!machine) {
            return res.status(404).send("Máquina não encontrada");
        }

        res.status(200).send()
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao buscar a máquina")
    }
}

exports.findByCompany = async (req, res) => {
    try {
        const { companyId } = req.params
        
        const company = await companyService.exists(companyId);
    
        if (!company) {
            return res.status(404).send('Empresa não encontrada');
        }
        
        let machines = await machineService.findByCompany(companyId);
        console.log(machines);

        res.status(200).send(machines);
    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}