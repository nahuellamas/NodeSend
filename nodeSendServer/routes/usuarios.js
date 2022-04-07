const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController.js');
const {check} = require('express-validator');
router.post('/',
    [
        check('nombre', 'El Nombre es Obligatorio').not().isEmpty(),
        check('email', 'Agrega un E-mail valido').isEmail(),
        check('password','El password debe ser de al menos 6 caracteres').isLength({min: 6})
    ],
    usuarioController.nuevoUsuario
);

module.exports = router;