const { Schema, model } = require("mongoose");
const pedidoSchema = Schema({
  idProducto: {
    type: Schema.Types.ObjectId,
    ref: "Producto",
    required: [true, "Por favor, ingrese el ID del prodcuto"],
  },
  idUsuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: [true, "Por favor, ingrese el id del producto"],
  },
  precio: {
    type: Number,
    required: [true, "Por favor, ingrese el precio del producto"],
  },
});
module.exports = model("Pedido", pedidoSchema);
