const express = require('express');

const saldoClienteRouter = express.Router();

const saldoClienteController = require('../controllers/saldoClienteController');


saldoClienteRouter.get('/conta/:id', saldoClienteController.getByCliente);

module.exports = saldoClienteRouter;