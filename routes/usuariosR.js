const { Router } = require("express");

const {
  crearUsuario,
  mostarUsuarios,
  actualizarUsuario,
  borrarUsuario,
} = require("../controllers").Usuario;

const router = Router();

router.post("/", crearUsuario);
router.get("/:id", mostarUsuarios);
router.delete("/:idU", borrarUsuario);
router.put("/:idU", actualizarUsuario);

module.exports = router;