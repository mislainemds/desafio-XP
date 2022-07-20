const express = require('express');
const saldoClienteRouter = require('../routers/saldoClienteRouter');
const movimentacaoRouter = require('../routers/movimentacaoContaRouter');

const app = express()

app.use(express.json());
app.use('/', saldoClienteRouter);
app.use('/', movimentacaoRouter);

app.get('/', (req, res)=>{
  return res.send("ouxe");
})

module.exports = app;