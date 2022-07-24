const operacoesService = require('../services/operacoesService');

const operacoesController = {
  postCompra: async (req, res) => {
    const dados = req.body
    const novaCompra = await operacoesService.postCompra(dados);
    return res.status(201).json(novaCompra);
  },
  postVenda: async (req, res) => {
    const dados = req.body
    const novaVenda = await operacoesService.postVenda(dados);
    return res.status(201).json(novaVenda);
  }
}

module.exports = operacoesController