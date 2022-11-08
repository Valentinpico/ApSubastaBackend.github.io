const { Router } = require('express');
const { crearPedido, borrarPedido,mostrarPedidosPorProducto,actualizarPedido ,mostrarPedidoMayorDeUnProducto} = require('../controllers').Pedido;

const router = Router();

router.get("/:id", mostrarPedidosPorProducto);
router.get("/mayor/:id", mostrarPedidoMayorDeUnProducto);
router.post("/", crearPedido);
router.delete("/:id", borrarPedido);
router.put("/:idPedido",actualizarPedido)

module.exports = router;