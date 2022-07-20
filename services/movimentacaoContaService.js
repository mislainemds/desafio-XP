const { Deposito } = require('../models');

const movimentacaoService = {
  postDeposito: async (dados) => {
    const novoDeposito = await Deposito.create(dados)
    return novoDeposito;
  }
}

module.exports = movimentacaoService;