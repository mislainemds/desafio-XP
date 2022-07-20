const SaldoClienteService = require('../services/saldoClienteService');

const clienteController = {
  getByCliente: async (req, res) => {
    const { id } = req.params;
    const cliente = await SaldoClienteService.getByCliente(id)
    res.status(200).json(cliente);
  },
}

module.exports = clienteController;