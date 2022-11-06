const { Schema, model } = require("mongoose");
const NotificacionSchema = Schema({
  idTipoNotificacion: {
    type: Schema.Types.ObjectId,
    ref:"TipoNotificacion",
    required: [true, 'Por favor, ingrese el ID del tipo de notificación'],
  },
  idUsuario: {
    type: Schema.Types.ObjectId,
    ref:"Usuario",
    required: [true, 'Por favor, ingrese el ID del usuario'],
  },
  idProducto: {
    type: Schema.Types.ObjectId,
    ref:"Producto",
    required: [true, 'Por favor, ingrese el ID del tipo de notificación'],
  },
  fecha: {
    type: Date,
  },
  hora: {
    type: Date,
  },
});
module.exports = model("Notificacion", NotificacionSchema);
