const Usuario = require("./usuariosC");
const TipoNotificacion = require("./tiponotificacion");
const CategoriaProducto = require("./categoriaproductos");
const Producto = require("./productosC");
const Notificacion = require("./notificacionC");
const Favorito = require('./favoritoC');
const Imagen = require('./imagenC');
const Pedido = require('./pedidoC');
const Recibo = require('./reciboC');

module.exports = {
  Imagen,
  Usuario,
  TipoNotificacion,
  CategoriaProducto,
  Producto,
  Notificacion, Favorito, Pedido, Recibo
};
