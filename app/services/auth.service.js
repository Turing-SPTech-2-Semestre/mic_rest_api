const { findByEmail } = require('../repositories/user.repository');
const { compare } = require('../helper/passwordHash.helper')

exports.validateUser = async (email, password) => {
    const user = await findByEmail(email)

    if (user.length > 0) {
       if (compare(password, user[0].senha))  {
            return user[0];
       }
    }

    return null;
};