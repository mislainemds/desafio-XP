const ativosService = require('../services/ativosService');

const ativosController = {
  getAtivo: async (req, res) => {
    const { id } = req.params;
    const ativo = await ativosService.getAtivo(id)
    return res.status(200).json(ativo);
  },
  getAtivosCodCliente: async (req, res) => {
    const { id } = req.params;

    const ativo = await ativosService.getAtivosCodCliente(id)
    return res.status(200).json(ativo);
  }
}

module.exports = ativosController;