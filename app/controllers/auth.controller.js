const { authService } = require('../services');
const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../environments/environment');

let refreshTokens = [];

exports.login = async (req, res) => {
    // Authenticate User

    const { email, password } = req.body;
    if (email && password) {
        const user = await authService.validateUser(email, password); 

        if (user) {
            const access_token = generateAccessToken(user);
            const refresh_token = generateRefreshToken(user);
            refreshTokens.push(refresh_token);
            res.status(200).send({ userId: user.id, companyFk: user.fk_company, displayName : user.displayName, email : user.email, access_token: access_token, refresh_token: refresh_token });
        } else {
            res.status(401).send('Usuário não encontrado!');
        }
    } else {
        res.status(400).send('Email e senha são necessários para o login!');
    }
}

exports.token = (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken === null) {
        return res.status(401).send('UNAUTHORIZE');
    }
    else {
        if(!refreshTokens.includes(refreshToken)){
            return res.status(401).send('UNAUTHORIZE');
        }
        else{
            jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
                if (err){
                    return res.sendStatus(401)
                }
                const accessToken = generateAccessToken({ name: user.name })
                res.json({ access_token: accessToken })
            })
        }
    }
}

exports.logout = (req, res) => {
    const {token} = req.params;
    refreshTokens = refreshTokens.filter(token => token !== token);
    res.status(204).send();
}

const generateAccessToken = (user) => {
    // const time = 1000 * 60 * 60;
    // const s = time.toString();
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '10h' });
}

const generateRefreshToken = (user) => {
    return jwt.sign(user, REFRESH_TOKEN_SECRET);
}
