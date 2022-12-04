const { exec } = require('../database/sqlConfig');

exports.findByEmail = (email) => {
    return exec(`
        SELECT id
        FROM mic_user
        WHERE email = '${email}';
    `);
};

exports.findByEmailAndPassword = (email, password) => {
    return exec(`
        SELECT *
        FROM mic_user
        WHERE email='${email}'
        AND senha='${password}'; 
    `);  
};

exports.create = (user) => {
    return exec(`
        INSERT INTO mic_user
        VALUES (
            ${user.companyId},
            '${user.name}',
            '${user.email}',
            '${user.password}'
        );
    `);
};
