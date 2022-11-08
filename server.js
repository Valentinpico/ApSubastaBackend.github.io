const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

class Server {
    constructor() {
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths = {
            Usuarios: '/users',
            TipoNotificaciones:'/tiponotificaciones',
            CategoriaProducto:'/categoriaproductos',
            Productos:'/productos',
            Notificacion:'/notificacion',
            Favorito:'/favorito',
            Imagen:'/imagen',
            Pedido:'/pedido',
            //
            Recibo:'/recibo'
        }
        this.conectarDB();
        this.middlewares();
        this.routes();
        this.router.use('/7moB/AppSubasta/api', this.app);
        this._express = express().use(this.router);
    }
    async conectarDB() {
        await dbConnection()
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.paths.Usuarios, require('./routes/usuariosR'));
        this.app.use(this.paths.TipoNotificaciones, require('./routes/tipoNotificacion'));
        this.app.use(this.paths.CategoriaProducto, require('./routes/categoriaProducto'));
        this.app.use(this.paths.Productos, require('./routes/productosR'));
        this.app.use(this.paths.Notificacion, require('./routes/notificacionesR'));
        this.app.use(this.paths.Favorito, require('./routes/favoritoR'));
        this.app.use(this.paths.Imagen, require('./routes/imagenR'));
        this.app.use(this.paths.Pedido, require('./routes/pedidosR'));

    }
    listen() {
        this._express.listen(this.port);
    }
}

module.exports = Server;