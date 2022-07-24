const { Compra, Ativo, Venda } = require('../models');
const ativosService = require('../services/ativosService')
const saldoClienteService = require('../services/saldoClienteService')

const operacoesService = {
  postCompra: async (dados) => {
    const ativo = await ativosService.getAtivo(dados.codAtivo)
    const ativoDatavalues = ativo.dataValues;
    const valorAtivo = ativoDatavalues.valor;
    const saldoCliente = await saldoClienteService.getByCliente(dados.codCliente)

    const quantidadeCompraAtivos = dados.quantidade;
    const valorCompra = valorAtivo * quantidadeCompraAtivos;

    if (valorCompra > saldoCliente.saldo) throw new Error('Saldo do cliente é Insuficiente')
    
    if (dados.quantidade > ativoDatavalues.quantidade) throw new Error("Quantidade de ativos disponiveis insuficiente ")

    const novaCompra = await Compra.create({ codCliente: dados.codCliente, codAtivo: dados.codAtivo, quantidade: dados.quantidade, valor: valorCompra, })
    const compra = novaCompra.dataValues
    const { valor, ...dadosCompra } = compra
    await Ativo.decrement({ quantidade: quantidadeCompraAtivos }, { where: { id: dados.codAtivo } })

    return dadosCompra
  },
  postVenda: async (dados) => {
    const ativo = await ativosService.getAtivo(dados.codAtivo)
    const ativoDatavalues = ativo.dataValues;
    const valorAtivo = ativoDatavalues.valor;

    const quantidadeVendaAtivos = dados.quantidade;
    const valorVenda = valorAtivo * quantidadeVendaAtivos;

    const quantidadeAtivosCliente = await ativosService.getAtivosCodCliente(dados.codCliente)
    quantidadeAtivosCliente.map((quant) => {
      if (quantidadeVendaAtivos > quant.quantidadeTotal) throw new Error("Quantidade solicitada excede a quantidade de ativos disponível na carteira")
    })
    
    const novaVenda = await Venda.create({ codCliente: dados.codCliente, codAtivo: dados.codAtivo, quantidade: dados.quantidade, valor: valorVenda, })
    const venda = novaVenda.dataValues
    const { valor, ...dadosVenda } = venda
    await Ativo.increment({ quantidade: quantidadeVendaAtivos }, { where: { id: dados.codAtivo } })

    return dadosVenda
  }
};

module.exports = operacoesService;
