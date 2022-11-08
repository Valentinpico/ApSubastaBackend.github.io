const { response } = require("express");
const { mongo } = require("mongoose");
const { Image } = require("../models");

const postURLIimg = async (req, res) => {
    try {
        const body = req.body;
        body.idProducto = mongo.ObjectId(body.idProducto);
        const image = new Image(body);
        const imageNueva = await image.save();
        return res.status(201).json(imageNueva);
    } catch (error) {
        res.json(error);
    }
};
const mostrarImagenesPorProdcuto = async (req, res) => {
    try {
        const {idProducto} = req.params;
        const imagenes = await Image.find({ idProducto: idProducto });
        res.json(imagenes);
    } catch (error) {
        res.json(error);
    }
};

const borrarImagenPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const imagenEliminada = await Image.findByIdAndDelete(id);
        res.json(imagenEliminada);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    postURLIimg,
    mostrarImagenesPorProdcuto, borrarImagenPorId
};
