const crypto = require('crypto');

exports.generateCompanyCode = () => {
    return crypto.randomBytes(5).toString('hex');
};