const { companyService, machineService } = require('../services/index');

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
            
            if (!companyExists) {
                return res.status(404).send("Empresa não encontrada")
            }
            
            const machineAlreadyExists = await machineService.exists(serialNumber);

            if (machineAlreadyExists) {
                return res.status(403).send("Essa máquina já foi cadastrada");
            }

            await machineService.create(req.body);
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