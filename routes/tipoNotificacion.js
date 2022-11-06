const { Router } = require("express");

const { mostrarTipoGeneal, mostarTipoId } =
  require("../controllers").TipoNotificacion;

const router = Router();

router.get("/:id", mostarTipoId);

module.exports = router;
