const {getUserAlertCount } = require('../repositories/dashHilary.repository'); 

exports.getUserAlertCount = async (machine) => {
    const resultado = await getUserAlertCount();

    if (resultado.length > 0)
        return resultado[0];
    
    return null;
}