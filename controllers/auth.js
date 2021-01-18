const { response } = require("express");

const crearUsuario = async(req, res = response) => {
    res.json({
        ok: true,
        usuario: 'new'
    });
}

const login = async(req, res) => {
    
    const { email, password } = req.body;
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const renew = async(req, res) => {
    res.json({
        ok: true,
        msg: 'renew',
    });
}

module.exports = {
    crearUsuario,
    login,
    renew
}