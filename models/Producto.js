const { Schema, model } = require("mongoose");
const ProductoSchema = Schema({
  idUsuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: [true, "Por favor, ingrese el ID del usuario"],
  },
  idCategoria: {
    type: Schema.Types.ObjectId,
    ref: "CategoriaProducto",
    required: [true, "Por favor, ingrese la categoria del producto"],
  },
  nombreProducto: {
    type: String,
    required: [true, "Por favor, ingrese el nombre o titulo del producto"],
  },
  descripcion: {
    type: String,
    default: "",
  },
  fecha: {
    type: Date,
  },
  hora: {
    type: Number,
    default: 24,
  },
  precio: {
    type: Number,
    required: [true, "Por favor, ingrese el valor inicial"],
  },
  estado: {
    type: Boolean,
    default: false,
  },
});
module.exports = model("Producto", ProductoSchema);
