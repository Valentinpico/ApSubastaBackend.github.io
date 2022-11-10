const { response } = require("express");
const { mongo } = require("mongoose");
const { ReciboFactura } = require("../models");

const crearFactura = async (req, res) => {
    try {
        const body = req.body;
        body.idPedido = mongo.ObjectId(body.idPedido);
        const reciboFactura = new ReciboFactura(body);
        const reciboFacturaNueva = await reciboFactura.save();
        return res.status(201).json(reciboFacturaNueva);
    } catch (error) {
        res.json(error);
    }
};
const mostrarFacturasPorUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const reciboFacturas = await ReciboFactura.find({ idUsuario: id });
        res.json(reciboFacturas);
    } catch (error) {
        res.json(error);
    }
};
module.exports = {
    crearFactura,
    mostrarFacturasPorUsuario
};
