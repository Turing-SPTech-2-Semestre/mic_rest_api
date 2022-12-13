const { companyService, alertMachineService } = require('../services/index');

exports.findLastSevenByCompanyOrderByMachine = async (req, res) => {
    try {
       const { companyId } = req.params; 

       const company = await companyService.exists(companyId);

       if(!company) {
            return res.status(404).send("Empresa não encontrada");
       }

       const resultado = await alertMachineService.findLastSevenByCompanyOrderByMachine(companyId);
       res.send(resultado);
    } 
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao buscar os dados de leitura");
    }
}

exports.findAlertByCompanyId = async (req, res) => {
    try{
        const{ companyId, lastDays } = req.params;

        if(companyId && lastDays) {
            const companyExists = await companyService.exists(9);

            if(!companyExists) {
               res.status(403).send("Essa empresa não existe");
            }

            const resultado = await alertMachineService.findAlertByUserName(9, lastDays);
            res.send(resultado);
        }
        else {
            res.status(404).send("Faltam dados para buscar os dados de leitura");
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao buscar os dados de leitura")
    }
}

exports.findAlertByUserName = async (req, res) => {
    try{
        const{companyFk, lastDays} = req.params;

        if(lastDays) {
            const companyExists = await companyService.exists(companyFk);

            if(!companyExists) {
               res.status(403).send("Essa empresa não existe");
            }

            const resultado = await alertMachineService.findAlertByUserName(companyFk, lastDays);
            res.send(resultado);
        }
        else {
            res.status(404).send("Faltam dados para buscar os dados de leitura");
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao buscar os dados de leitura")
    }
}