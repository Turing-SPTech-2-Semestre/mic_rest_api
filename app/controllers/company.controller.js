const { companyService } = require('../services/index');
const { generateCompanyCode } = require('../helper/companyCode.helper');

exports.create = async (req, res) => {
    try {
        const { companyName, cnpj, cep, estado, numero} = req.body;
    
        if (companyName && cnpj && cep && estado && numero) {

            const companyAlreadyExists = await companyService.findByName(companyName);

            if(companyAlreadyExists) {
                return res.status(403).send("Já existe uma empresa cadastrada com esse nome")
            }

            req.body.companyCode = generateCompanyCode();
            await companyService.create(req.body); 

            res.status(201).send(`
                Empresa cadastrada com sucesso ${req.body.companyCode} 
                \nEsse é um token especial para sua empresa! Guarde-o pois será importante para acessar outras funcionalidades.
            `);
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