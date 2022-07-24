const movimentacaoService = require('../services/movimentacaoContaService')

const movimentacaoController = {
  postDeposito: async (req, res) => {
    try {
      const dados = req.body;
      const novoDeposito = await movimentacaoService.postDeposito(dados)
      return res.status(201).json(novoDeposito)
    } catch (e) {
      return res.status(400).json({ message: e.message})
    }
  },
  postSaque: async (req, res) => {
    try {
      const dados = req.body;
      const novoSaque = await movimentacaoService.postSaque(dados)
      return res.status(201).json(novoSaque)
    } catch (e) {
      return res.status(400).json({ message: e.message})
    }
  },
}

module.exports = movimentacaoController;