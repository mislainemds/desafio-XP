const { Ativo, Compra, Venda, sequelize } = require('../models');

const ativosService = {
  getAtivo: async (id) => {
    const ativo = await Ativo.findOne({ where: { id } })
    return ativo;
  },
  getAtivosCodCliente: async (codCliente) => {
    const totalAtivos = {};

    const compras = await Compra.findAll({
      where: { codCliente: codCliente },
      include: { model: Ativo, },
      attributes: [
        "codAtivo",
        [sequelize.fn("sum", sequelize.col("Compra.quantidade")), "quantidadeTotal"],
      ],
      group: ["codAtivo"],
    });

    compras.forEach(async (compra) => {
      const { codAtivo, quantidadeTotal, Ativo } = compra.dataValues;
      if (!totalAtivos[codAtivo]) {
        totalAtivos[codAtivo] = {
          codCliente,
          codAtivo,
          quantidadeTotal: parseInt(quantidadeTotal),
          valor: +Ativo.dataValues.valor
        };
      }
    });

    const vendas = await Venda.findAll({
      where: { codCliente: codCliente },
      include: { model: Ativo, },
      attributes: [
        "codAtivo",
        [sequelize.fn("sum", sequelize.col("Venda.quantidade")), "quantidadeTotal"],
      ],
      group: ["codAtivo"],
    });

    vendas.forEach((venda) => {
      const { codAtivo, quantidadeTotal, Ativo } = venda.dataValues;
      if (!totalAtivos[codAtivo]) {
        totalAtivos[codAtivo] = {
          codAtivo,
          quantidadeTotal: -parseInt(quantidadeTotal),
          valor: +Ativo.dataValues.valor
        };
      }
      
      totalAtivos[codAtivo].quantidadeTotal -= parseInt(quantidadeTotal);
    });

    return Object.values(totalAtivos);
  },  
}


module.exports = ativosService
