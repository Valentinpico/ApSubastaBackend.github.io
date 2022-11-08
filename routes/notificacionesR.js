const { Router } = require('express');
const { crearNotificacion, mostrarNotificacionesPorIdUsuario } = require('../controllers').Notificacion;

const router = Router();

router.get("/:id", mostrarNotificacionesPorIdUsuario);
router.post("/", crearNotificacion);

module.exports = router;