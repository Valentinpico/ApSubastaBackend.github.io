const { response } = require("express");
const { mongo } = require("mongoose");
const { TipoNotificacion } = require("../models");

const mostarTipoId = async (req, res) => {
  try {
    const id = req.params.id;
    const tipo = await TipoNotificacion.findById(id);
    res.json(tipo);
  } catch (error) {
    res.json(error);
  }
};


module.exports = {
  mostarTipoId,
};
