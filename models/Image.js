const { Schema, model } = require("mongoose");
const imageSchema = Schema({
    idProducto: {
        type: Schema.Types.ObjectId,
        ref:"Producto",
        required: [true, 'Por favor, ingrese el ID del prodcuto'],
      },
    imageUrl: {
        type: String,
        required: [true, 'Por favor, ingrese la url de la imagen'],
      },
});
module.exports = model("Image", imageSchema);