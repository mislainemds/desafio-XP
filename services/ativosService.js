const { Ativo } = require('../models');

const ativosService = {
  getAtivo: async (id) => {
    const ativo = await Ativo.findOne({ where: { id } })
    return ativo;
  }
}

module.exports = ativosService