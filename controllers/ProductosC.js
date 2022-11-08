const { response } = require("express");
const { mongo } = require("mongoose");
const { Producto } = require("../models");

const crearProductos = async (req, res) => {
  try {
    const body = req.body;
    body.fecha = new Date();
    body.idCategoria = mongo.ObjectId(body.idCategoria);
    const producto = new Producto(body);
    const productoNuevo = await producto.save();
    return res.status(201).json(productoNuevo);
  } catch (error) {
    return res.json(error);
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...body } = req.body;

    const productoModificado = await Producto.findByIdAndUpdate(id, body);
    res.json(productoModificado);
  } catch (error) {
    res.json(error);
  }
};
const borrarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEliminado = await Producto.findByIdAndDelete(id);
    res.json(productoEliminado);
  } catch (error) {
    res.json(error);
  }
};

const mostrarProductosPorCategoria = async (req, res) => {
  try {
    const { idCategoria } = req.params;
    const productos = await Producto.find({ idCategoria: idCategoria });
    res.json(productos);
  } catch (error) {
    res.json(error);
  }
};
const mostrarProductosDeLosDemasUsuarios = async (req, res) => {
  try {
    const { idUsuario } = req.params;
    const productos = await Producto.find();
    let productosFiltrados =  productos.filter(e=> e.idUsuario != idUsuario );
    res.json(productosFiltrados);
  } catch (error) {
    res.json(error);
  }
};
const mostrarProductosDelUsuario = async (req, res) => {
  try {
    const { idUsuario } = req.params;
    const productos = await Producto.find({ idUsuario: idUsuario });
    res.json(productos);
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  mostrarProductosDeLosDemasUsuarios,
  crearProductos,
  borrarProducto,
  actualizarProducto,
  mostrarProductosPorCategoria,
  mostrarProductosDelUsuario,
};
