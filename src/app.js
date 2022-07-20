const express = require('express');
const saldoClienteRouter = require('../routers/saldoClienteRouter');

const app = express()

app.use(express.json());
app.use('/', saldoClienteRouter);

app.get('/', (req, res)=>{
  return res.send("ouxe");
})

module.exports = app;