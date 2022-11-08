const { Router } = require("express");

const {
  crearProductos,
  borrarProducto,
  actualizarProducto,
  mostrarProductosPorCategoria,
  mostrarProductosDeLosDemasUsuarios,
  mostrarProductosDelUsuario,
} = require("../controllers").Producto;

const router = Router();

router.post("/", crearProductos);
router.delete("/:id", borrarProducto);
router.put("/:id", actualizarProducto);

router.get("/:idCategoria", mostrarProductosPorCategoria);
router.get("/general/:idUsuario", mostrarProductosDeLosDemasUsuarios);
router.get("/propio/:idUsuario", mostrarProductosDelUsuario);

module.exports = router;
