const { findByEmailAndPassword } = require('../repositories/user.repository');

exports.findByEmailAndPassword = async (email, password) => {
    const user = await findByEmailAndPassword(email, password)

    if (user.length > 0) {
        return user[0];
    }

    return null;
};