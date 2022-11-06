const { Router } = require("express");

const {
  crearProductos
} = require("../controllers").Producto;

const router = Router();

router.post("/", crearProductos);
/* router.get("/:id", mostarUsuarios);
router.delete("/:idU", borrarUsuario);
router.put("/:idU", actualizarUsuario); */

module.exports = router;