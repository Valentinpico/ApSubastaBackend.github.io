const { response } = require("express");
const { mongo } = require("mongoose");
const { CategoriaProducto } = require("../models");

const mostarCategoriasId = async (req, res) => {
  try {
    const id = req.params.id;
    const categoria = await CategoriaProducto.findById(id);
    res.json(categoria);
  } catch (error) {
    res.json(error);
  }
};
const mostrarCategoriasGeneal = async (req, res) => {
  try {
    const categorias = await CategoriaProducto.find();
    res.json(categorias);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  mostarCategoriasId,
  mostrarCategoriasGeneal,
};
