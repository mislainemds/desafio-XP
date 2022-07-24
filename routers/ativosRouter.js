const express = require('express');

const ativoRouter = express.Router();

const ativosController = require('../controllers/ativosController');


ativoRouter.get('/ativos/:id', ativosController.getAtivo);
ativoRouter.get('/ativos/cliente/:id', ativosController.getAtivosCodCliente);

module.exports = ativoRouter;