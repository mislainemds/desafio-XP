const express = require('express');

const ativoRouter = express.Router();

const ativosController = require('../controllers/ativosController');


ativoRouter.get('/ativos/:id', ativosController.getAtivo);

module.exports = ativoRouter;