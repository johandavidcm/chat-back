

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // TODO: validar el JWT
            // Si el token no es válido, desconectar

            // TODO: Saber que usuario esta activo

            // TODO: Emitir todos los usuarios conectados

            // TODO: Socket join

            // TODO: Escuchar cuando el cliente manda un mensaje
            // mensaje personal
            
            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconecto
            // TODO: Emitir todos los usuarios conectados


        });
    }


}


module.exports = Sockets;