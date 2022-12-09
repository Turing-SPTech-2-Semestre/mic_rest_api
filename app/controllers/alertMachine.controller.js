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
        res.status(400).send("Houve um erro ao inserir os dados de leitura");
    }
}
