const { comprobarJWT } = require('../helpers/jwt');
const { usuarioConectado, usuarioDesconectado, getUsuarios, grabarMensaje } = require('../controllers/sockets');

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {

            // validar el JWT
            // Si el token no es válido, desconectar
            const [ valido, uid ] = comprobarJWT(socket.handshake.query['x-token']);
            if(!valido){
                console.log('socket no identificado');
                return socket.disconnect();
            }

            // Saber que usuario esta activo
            await usuarioConectado( uid );

            // unir al usuario a una sala de socket.io
            socket.join(uid);

            // Emitir todos los usuarios conectados
            this.io.emit('lista-usuarios', await getUsuarios())

            // Escuchar cuando el cliente manda un mensaje
            // mensaje personal
            socket.on('mensaje-personal', async(payload) => {
                const mensaje = await grabarMensaje(payload);
                this.io.to( payload.para ).emit('mensaje-personal', mensaje);
                this.io.to( payload.de ).emit('mensaje-personal', mensaje);
            });
            
            
            // Disconnect
            // Marcar en la BD que el usuario se desconecto
            socket.on('disconnect', async() => {
                await usuarioDesconectado(uid);
                this.io.emit('lista-usuarios', await getUsuarios())
            });

            // TODO: Emitir todos los usuarios conectados


        });
    }


}


module.exports = Sockets;