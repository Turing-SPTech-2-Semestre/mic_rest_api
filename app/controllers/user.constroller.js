const { companyService, userService } = require('../services/index');

exports.create = async (req, res) => {
    
    try {
        let { companyCode, name, email, password} = req.body;
        
        if (companyCode && name && email && password) {
            const companyId = await companyService.getIdByCompanyCode(companyCode); 

            if (!companyId) {
                return res.status(404).send("Empresa não encontrada")
            }
            
            const userExists = await userService.exists(email);
            
            if (userExists) {
                return res.status(403).send("Esse email já está cadastrado");
            }
         
            await userService.create({
                companyId,
                name,
                email,
                password
            });
            
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