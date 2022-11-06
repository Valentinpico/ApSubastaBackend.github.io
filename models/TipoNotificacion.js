const { Schema, model } = require("mongoose");
const tipoNotificacionSchema = Schema({
  nombreNotificacion: {
    type: String,
  },
});
module.exports = model("TipoNotificacion", tipoNotificacionSchema);
