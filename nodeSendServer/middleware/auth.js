const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(authHeader){
        const token = authHeader.split(' ')[1];
        try {
            const usuario = jwt.verify(token, process.env.SECRET_KEY);
            req.usuario = usuario;
        } catch (error) {
            res.status(401).json({msg: 'No autorizado'});
            return console.log('JWT no valido');
        }
    }
    return next();
}