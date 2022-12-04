const bcrypt = require('bcrypt');

exports.generatePasswordHash = async (password) => {
    const salt = bcrypt.genSaltSync(10);
    
    return await bcrypt.hash(password, salt) 
}

exports.compare = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}
