const { companyService, userService } = require('../services/index');

exports.create = async (req, res) => {
    try {
        const { companyId, name, email, password} = req.body;
        
        if (companyId && name && email && password) {
            const companyExists = await companyService.exists(companyId); 
            
            if (!companyExists) {
                return res.status(404).send("Empresa não encontrada")
            }
            
            const userExists = await userService.exists(email);
            
            if (userExists) {
                return res.status(403).send("Esse email já está cadastrado");
            }
            
            await userService.create(req.body);
            
            res.status(201).send("Usuário cadastrado com sucesso");
        }
        else {
            return res.status(400).send("Faltam informações para realizar o cadastro");
        }
    }
    catch (err) {
        console.log(err);
       res.status(400).send("Houve um erro ao realizar o cadastro"); 
    }
} 