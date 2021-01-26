const jwt = require('jsonwebtoken');

const generarJWT = ( uid ) => {
    return new Promise(( resolve, reject ) => {
        // Informacion que irá en el JSON Web Token
        // Entre menos mejor
        const payload = { uid };
        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, (err, token) => {
            if( err ){
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve( token );
            }
        });
    });
}

module.exports = {
    generarJWT
}