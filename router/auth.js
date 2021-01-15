/*
    path: /api/login
*/

const { Router } = require('express');

const router = Router();

// Crear nuevos Usuarios
router.post('/new', (req, res) => {
    res.json({
        ok: true,
        usuario: 'new'
    });
});

// Login
router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
    });
});

// Revalidar token
router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
});

module.exports = router;