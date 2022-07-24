const express = require('express');

const operacoesRouter = express.Router();

const operacoesController = require('../controllers/operacoesController');


operacoesRouter.post('/investimentos/comprar', operacoesController.postCompra);
operacoesRouter.post('/investimentos/vender', operacoesController.postVenda);

module.exports = operacoesRouter;