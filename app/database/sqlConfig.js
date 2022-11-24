const mssql = require("mssql");
const dotenv = require('dotenv');

dotenv.config();

const sqlServerConfig = {
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    database: process.env.NAME_DATABASE,
    server: process.env.NAME_SERVER,
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true
    }
};

exports.exec = (instrucao) => {
        return new Promise((resolve, reject) => {
            mssql.connect(sqlServerConfig)
                .then(() => {
                    return mssql.query(instrucao);
                })
            .then((resultados) => {
                resolve(resultados.recordset);
            })
            .catch((erro) => {
                reject(erro);
                console.log('ERRO:', erro);
            });
            mssql.on('error', (erro) => {
                return ("Houve um erro no SQL SERVER:", erro);
            })
        });
};
