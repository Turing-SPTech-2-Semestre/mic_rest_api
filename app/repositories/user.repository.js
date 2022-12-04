const { exec } = require('../database/sqlConfig');
const { generatePasswordHash } = require('../helper/passwordHash.helper')

exports.findByEmail = (email) => {
    return exec(`
        SELECT id
        FROM mic_user
        WHERE email = '${email}';
    `);
};

exports.findByEmail = (email) => {
    return exec(`
        SELECT *
        FROM mic_user
        WHERE email='${email}'
    `);  
};

exports.create = async (user) => {
    return exec(`
        INSERT INTO mic_user
        VALUES (
            ${user.companyId},
            '${user.name}',
            '${user.email}',
            '${await generatePasswordHash(user.password)}'
        );
    `);
};
