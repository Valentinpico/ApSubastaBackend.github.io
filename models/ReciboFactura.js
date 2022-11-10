const { Schema, model } = require("mongoose");
const reciboFacturaSchema = Schema({
  idPedido: {
    type: Schema.Types.ObjectId,
    ref: "Pedido",
  },
  fecha: {
    type: Date,
    default: new Date()
  },
  totalPagar: {
    type: Number,
  },
  idUsuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },

});
module.exports = model("ReciboFactura", reciboFacturaSchema);
