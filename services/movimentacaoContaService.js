const { Deposito, Saque } = require('../models');
const saldoClienteService = require('../services/saldoClienteService')

const movimentacaoService = {
  postDeposito: async (dados) => {
    const valorDeposito = dados.valor;
    if (valorDeposito <= 0) throw new Error("Valor do deposito deve ser superior a zero")
    const novoDeposito = await Deposito.create(dados);
    return novoDeposito;
  },
  postSaque: async (dados) => {
    const { saldo } = await saldoClienteService.getByCliente(dados.codCliente)
    const valorSaque = dados.valor
    if (valorSaque > saldo || valorSaque <= 0) throw new Error("Valor inválido ou indisponível para Saque")
    const novoSaque = await Saque.create(dados);
    return novoSaque;
  }
}

module.exports = movimentacaoService;