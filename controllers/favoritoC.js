const { response } = require("express");
const { mongo } = require("mongoose");
const { Favorito } = require("../models");

const crearFavorito = async (req, res) => {
    try {
        const body = req.body;
        body.idUsuario = mongo.ObjectId(body.idUsuario);
        body.idProducto = mongo.ObjectId(body.idProducto);
        const favorito = new Favorito(body);
        const favoritoNuevo = await favorito.save();
        return res.status(201).json(favoritoNuevo);
    } catch (error) {
        res.json(error);
    }
};
const mostrarFavoritosPorIdUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const favoritos = await Favorito.find({ idUsuario: id });
        res.json(favoritos);
    } catch (error) {
        res.json(error);
    }
};

const borrarFavoritoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const favoritoEliminado = await Favorito.findOneAndDelete({idProducto:id});
        res.json(favoritoEliminado);
    } catch (error) {
        res.json(error);
    }
}
module.exports = {
    crearFavorito,
    mostrarFavoritosPorIdUsuario,borrarFavoritoPorId
};
