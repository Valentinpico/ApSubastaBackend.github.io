const { response } = require("express");
const { mongo } = require("mongoose");
const { ReciboFactura } = require("../models");

const crearFactura = async (req, res) => {
    try {
        const body = req.body;
        body.idUsuario = mongo.ObjectId(body.idUsuario);
        body.idProducto = mongo.ObjectId(body.idProducto);
        const pedido = new Pedido(body);
        const pedidoNuevo = await pedido.save();
        return res.status(201).json(pedidoNuevo);
    } catch (error) {
        res.json(error);
    }
};
const mostrarPedidosPorProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const pedidos = await Pedido.find({ idProducto: id });
        res.json(pedidos);
    } catch (error) {
        res.json(error);
    }
};
const mostrarPedidoMayorDeUnProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const pedidos = await Pedido.find({ idProducto: id });
        const pedidosOrdenados = pedidos.sort((a,b) => {
            return Number.parseInt(b.precio) - Number.parseInt(a.precio)
        })
        res.json(pedidosOrdenados[0]);
    } catch (error) {
        res.json(error);
    }
};



const actualizarPedido = async (req, res) => {
    try {
        const { idPedido } = req.params;
        const { ...body } = req.body;
        const pedidoActualizado = await Pedido.findByIdAndUpdate(idPedido, body)
        res.json(pedidoActualizado)
    } catch (error) {
        res.json(error)
    }
}
const borrarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedidoEliminado = await Pedido.findByIdAndDelete(id);
        res.json(pedidoEliminado);
    } catch (error) {
        res.json(error);
    }
}
module.exports = {
    crearFactura,
    mostrarPedidosPorProducto, borrarPedido, actualizarPedido, mostrarPedidoMayorDeUnProducto
};
