const { getTestChartJsPage} = require('../services/dashHilary');

exports.getUserAlertCount = async (req, res) => {
    try {
        const { companyId } = req.params;

        const resultado = await getTestChartJsPage.getUserAlertCount(companyId);

        if (resultado) {
            res.status(200).json(resultado);
        }
        else {
            res.status(404).send("Não foi possível achar a empresa");
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Houve um erro ao buscar as medidas");
    } 
}
