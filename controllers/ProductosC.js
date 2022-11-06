const { response } = require("express");
const { mongo } = require("mongoose");
const { Producto } = require("../models");

const crearProductos = async (req, res) => {
  try {
    const body = req.body;
    body.fecha = new Date();
    body.idCategoria= mongo.ObjectId(body.idCategoria)
    const producto = new Producto(body);
    const productoNuevo = await producto.save();
    return res.status(201).json(productoNuevo);
  } catch (error) {
    return res.json(error);
  }
};

const mostarUsuarios = async (req, res) => {
  try {
    const body = req.params.id;
    const user = await Usuario.findOne({ username: body });
    if (!user) {
      res.json({ message: "El username " + body + " no existe" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.json(error);
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const { idU } = req.params;
    const { ...body } = req.body;

    const usuarioModificado = await Usuario.findByIdAndUpdate(idU, body);
    res.json(usuarioModificado);
  } catch (error) {
    res.json(error);
  }
};
const borrarUsuario = async (req, res) => {
  try {
    const { idU } = req.params;
    const usuarioEliminado = await Usuario.findByIdAndDelete(idU);
    res.json(usuarioEliminado);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  crearProductos
};
