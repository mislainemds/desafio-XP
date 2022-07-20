const movimentacaoService = require('../services/movimentacaoContaService')

const movimentacaoController = {
  postDeposito: async (req, res) => {
    const dados = req.body;
    if (dados.valor <= 0) {
      return res.status(400).json({ message: "Valor deve ser superior a zero"})
    }
    const novoDeposito = await movimentacaoService.postDeposito(dados)
    return res.status(201).json(novoDeposito)
  }
}

module.exports = movimentacaoController;