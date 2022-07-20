const { Deposito, Saque } = require('../models');
const saldoClienteService = require('../services/saldoClienteService')

const movimentacaoService = {
  postDeposito: async (dados) => {
    const novoDeposito = await Deposito.create(dados)
    return novoDeposito;
  },
  postSaque: async (dados) => {
    const { saldo } = await saldoClienteService.getByCliente(dados.codCliente)
    const valorSaque = dados.valor
    if (valorSaque > saldo || valorSaque <= 0) throw new Error("Valor indisponivel para Saque")
    const novoSaque = await Saque.create(dados);
    return novoSaque;
  }
}

module.exports = movimentacaoService;