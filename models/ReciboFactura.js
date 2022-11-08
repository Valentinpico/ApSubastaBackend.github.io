const { Schema, model } = require("mongoose");
const reciboFacturaSchema = Schema({
  idPedido: {
    type: Schema.Types.ObjectId,
    ref: "Pedido",
    required: [true, "Por favor, ingrese el ID del pedido"],
  },
  fecha: {
    type: Date,
    default: new Date()
  },
  totalPagar: {
    type: Number,
  },
});
module.exports = model("ReciboFactura", reciboFacturaSchema);
