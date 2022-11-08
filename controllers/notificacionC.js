const { response } = require("express");
const { mongo } = require("mongoose");
const { Notificacion } = require("../models");

const crearNotificacion  = async (req, res) => {
  try {
    const body = req.body;
    body.idUsuario = mongo.ObjectId(body.idUsuario);
    body.idProducto = mongo.ObjectId(body.idProducto);
    body.idTipoNotificacion = mongo.ObjectId(body.idTipoNotificacion);
    const notificacion = new Notificacion(body);
    const notificacionNueva = await notificacion.save();
    return res.status(201).json(notificacionNueva);
    } catch (error) {
        res.json(error);
    }
};
const mostrarNotificacionesPorIdUsuario = async (req, res) => {
    try {
    const id = req.params.id;
    const notificaciones = await Notificacion.find({idUsuario:id});
    res.json(notificaciones);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  crearNotificacion ,
  mostrarNotificacionesPorIdUsuario,
};
