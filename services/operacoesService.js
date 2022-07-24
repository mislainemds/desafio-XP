const { Compra, Ativo, Venda } = require('../models');
const ativosService = require('../services/ativosService')
const saldoClienteService = require('../services/saldoClienteService')

const operacoesService = {
  postCompra: async (dados) => {
    const ativo = await ativosService.getAtivo(dados.codAtivo)
    const ativoDatavalues = ativo.dataValues;
    const valorAtivo = ativoDatavalues.valor;

    const quantidadeCompraAtivos = dados.quantidade;
    const valorCompra = valorAtivo * quantidadeCompraAtivos;

    const novaCompra = await Compra.create({ codCliente: dados.codCliente, codAtivo: dados.codAtivo, quantidade: dados.quantidade, valor: valorCompra, })
    const compra = novaCompra.dataValues
    const { valor, ...dadosCompra } = compra
    await Ativo.increment({ quantidade: -quantidadeCompraAtivos }, { where: { id: dados.codAtivo } })

    return dadosCompra
  },
  postVenda: async (dados) => {
    const ativo = await ativosService.getAtivo(dados.codAtivo)
    const ativoDatavalues = ativo.dataValues;
    const valorAtivo = ativoDatavalues.valor;

    const quantidadeVendaAtivos = dados.quantidade;
    const valorVenda = valorAtivo * quantidadeVendaAtivos;
    
    const novaVenda = await Venda.create({ codCliente: dados.codCliente, codAtivo: dados.codAtivo, quantidade: dados.quantidade, valor: valorVenda, })
    const venda = novaVenda.dataValues
    const { valor, ...dadosVenda } = venda
    await Ativo.increment({ quantidade: quantidadeVendaAtivos }, { where: { id: dados.codAtivo } })

    return dadosVenda
  }
};

module.exports = operacoesService;
