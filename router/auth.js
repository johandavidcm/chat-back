/*
    path: /api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
// Auth.js
const { crearUsuario, login, renew } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear nuevos Usuarios
router.post('/new', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('nombre', 'El nombre es requerido').notEmpty().isString(),
    check('password', 'La contraseña es requerida').notEmpty().isString(),
    validarCampos
], crearUsuario);

/*
    nombre: string,
    password: string,
    email: isEmail
*/

// Login
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login);

// Revalidar token
router.get('/renew',[
    validarJWT
] ,renew);

module.exports = router;