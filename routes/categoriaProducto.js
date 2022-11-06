const { Router } = require("express");

const { mostrarCategoriasGeneal, mostarCategoriasId } =
  require("../controllers").CategoriaProducto;

const router = Router();

router.get("/:id", mostarCategoriasId);
router.get("/", mostrarCategoriasGeneal);

module.exports = router;
