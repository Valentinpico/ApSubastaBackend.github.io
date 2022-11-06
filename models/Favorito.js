const { Schema, model } = require("mongoose");
const favoritoSchema = Schema({
    idProducto: {
        type: Schema.Types.ObjectId,
        ref:"Producto",
        required: [true, 'Por favor, ingrese el ID del prodcuto'],
      },
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref:"Usuario",
        required: [true, 'Por favor, ingrese el id del producto'],
      },
});
module.exports = model("Favorito", favoritoSchema);