// const sequelize = require('sequelize');
const { Cliente, Compra , Venda, Deposito, Saque } = require("../models");

const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const SaldoClienteService = {
  getByCliente: async (codCliente) => {
    const t = await sequelize.transaction();
    //const transaction = await Sequelize.transaction();
    let somaCompras = 0;
    let somaVendas = 0;
    let somaDepositos = 0;
    let somaSaques = 0;
    
    try {
      somaCompras = Number((await Compra.findOne({
        where: { codCliente },
        attributes: [
          [sequelize.fn("sum", sequelize.col("valor")), "somaCompras"],
        ],
      })).getDataValue('somaCompras'));
      somaVendas = Number((await Venda.findOne({
        where: { codCliente },
        attributes: [
          [sequelize.fn("sum", sequelize.col("valor")), "somaVendas"],
        ],
      })).getDataValue('somaVendas'));
      somaDepositos =  Number((await Deposito.findOne({
        where: { codCliente },
        attributes: [
          [sequelize.fn("sum", sequelize.col("valor")), "somaDepositos"],
        ],
      })).getDataValue('somaDepositos'));
      somaSaques =  Number((await Saque.findOne({
        where: { codCliente },
        attributes: [
          [sequelize.fn("sum", sequelize.col("valor")), "somaSaques"],
        ],
      })).getDataValue('somaSaques'));
      

      await t.commit();
    } catch (error) {
      await t.rollback();
    }
    const saidas = somaCompras + somaSaques;
    const entradas = somaDepositos + somaVendas;
    const total = entradas - saidas;
    return {
      codCliente: parseInt(codCliente),
      saldo: Number(total.toFixed(2)),
      // Saldo2: (somaDepositos + somaVendas) - (somaCompras + somaSaques)
      
    };
  },
};

module.exports = SaldoClienteService;
