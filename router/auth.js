/*
    path: /api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
// Auth.js
const { crearUsuario, login, renew } = require('../controllers/auth');

const router = Router();

// Crear nuevos Usuarios
router.post('/new', crearUsuario);

// Login
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login);

// Revalidar token
router.get('/renew', renew);

module.exports = router;