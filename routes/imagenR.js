const { Router } = require('express');
const { mostrarImagenesPorProdcuto,borrarImagenPorId,postURLIimg } = require('../controllers').Imagen;

const router = Router();

router.get("/:idProducto", mostrarImagenesPorProdcuto);
router.post("/", postURLIimg);
router.delete("/:id", borrarImagenPorId);

module.exports = router;