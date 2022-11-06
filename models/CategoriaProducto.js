const { Schema, model } = require("mongoose");
const categoriaProductoSchema = Schema({
  nombreCategoria: {
    type: String,
  },
});
module.exports = model("CategoriaProducto", categoriaProductoSchema);