const express = require('express');
const saldoClienteRouter = require('../routers/saldoClienteRouter');
const movimentacaoRouter = require('../routers/movimentacaoContaRouter');
const ativosRouter = require('../routers/ativosRouter');

const app = express()

app.use(express.json());
app.use('/', saldoClienteRouter);
app.use('/', movimentacaoRouter);
app.use('/', ativosRouter);

module.exports = app;