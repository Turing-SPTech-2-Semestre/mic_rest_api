const { companyService } = require('../services/index');

exports.create = async (req, res) => {
    try {
        const { companyName, email, cnpj, cep, estado, numero, senha } = req.body;
    
        if (companyName && email && cnpj && cep && estado && numero && senha) {
           console.log("Abobrinha") 
            await companyService.create(req.body); 
            
            res.status(201).send({message: "Empresa cadastrada com sucesso"}, codigoEmpresa: "");
        }
        else {
            res.status(400).send("Faltam dados para inserir no banco");    
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao inserir os dados de leitura");
    }

    const company = await companyService.exists()
}