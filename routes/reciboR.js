const { Router } = require("express");

const {
 crearFactura,mostrarFacturasPorUsuario
} = require("../controllers").Recibo;

const router = Router();

router.post("/", crearFactura);
router.get("/:id", mostrarFacturasPorUsuario);

module.exports = router;