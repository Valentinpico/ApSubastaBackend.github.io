const { response } = require("express");
const { mongo } = require("mongoose");
const { Usuario } = require("../models");

const crearUsuario = async (req, res) => {
  try {
    const body = req.body;
    body.fechaNacimiento = new Date(body.fechaNacimiento);
    const existeUsuario = await Usuario.findOne({ username: body.username });
    if (existeUsuario) {
      return res
        .status(400)
        .json(`${existeUsuario.username} ya se encuentra registrado`);
    }
    const emailExist = await Usuario.findOne({ email: body.email });
    if (emailExist) {
      return res
        .status(404)
        .json(`El correo ${emailExist.email} ya está registrado`);
    }
    const usuario = new Usuario(body);
    const usuarioNuevo = await usuario.save();
    return res.status(201).json(usuarioNuevo);
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
  crearUsuario,
  mostarUsuarios,
  actualizarUsuario,
  borrarUsuario,
};
