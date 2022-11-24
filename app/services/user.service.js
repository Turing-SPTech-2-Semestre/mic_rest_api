const { findByEmail, create } = require('../repositories/user.repository');

exports.exists = async (email) => {
    numberOfUsers = await findByEmail(email);

    return numberOfUsers.length > 0;
};

exports.create = async (user) => {
    return await create(user);
};