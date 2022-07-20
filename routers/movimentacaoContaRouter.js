const express = require('express');

const movimentacaoRouter = express.Router();

const movimentacaoController = require('../controllers/movimentacaoContaController');


movimentacaoRouter.post('/conta/deposito', movimentacaoController.postDeposito);

module.exports = movimentacaoRouter;