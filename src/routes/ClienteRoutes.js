const express = require('express')
const clienteRoutes = express.Router()
const { clienteController } = require('../controllers/ClienteControllers');

clienteRoutes.get('/clientes/', clienteController.selecionarTodosClientes)
clienteRoutes.post('/clientes/', clienteController.adicionarCliente)
module.exports = { clienteRoutes };