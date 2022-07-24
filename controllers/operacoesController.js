const operacoesService = require('../services/operacoesService');

const operacoesController = {
  postCompra: async (req, res) => {
    try {
      const dados = req.body
      const novaCompra = await operacoesService.postCompra(dados);
      return res.status(201).json(novaCompra);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  },
  postVenda: async (req, res) => {
    try {
      const dados = req.body
      const novaVenda = await operacoesService.postVenda(dados);
      return res.status(201).json(novaVenda);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  }
}

module.exports = operacoesController