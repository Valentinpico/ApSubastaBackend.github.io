const { Router } = require('express');
const { crearFavorito, mostrarFavoritosPorIdUsuario, borrarFavoritoPorId } = require('../controllers').Favorito;

const router = Router();

router.get("/:id", mostrarFavoritosPorIdUsuario);
router.post("/", crearFavorito);
router.delete("/:id", borrarFavoritoPorId);

module.exports = router;