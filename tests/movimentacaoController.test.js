const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai')
const saldoClienteService = require('../services/saldoClienteService')

const app = require('../src/app');

chai.use(chaiHttp);

const deposito = {
  "codCliente": 3,
    "valor": 155
}
const depositoInvalido = {
  "codCliente": 3,
    "valor": -15
}
const saque = {
  "codCliente": 3,
    "valor": 155
}
const saqueInvalido = {
  "codCliente": 3,
    "valor": -15
}

describe('ROTA POST /conta/deposito', () => {
  let saldoInicialDoCliente = 0

  beforeEach(async () => {
    let { saldo } = await saldoClienteService.getByCliente(3)

    saldoInicialDoCliente=saldo

  });

  it('Deve criar novo registro de deposito', async () => {
    
    try {
      postDeposito = await chai.request(app)
        .post('/conta/deposito')
        .send(deposito);
    } catch (error) {
      console.error(error.message);
    }

    const {saldo: saldoFinalDoCliente} = await saldoClienteService.getByCliente(3)

    expect(saldoFinalDoCliente).to.be.eq(saldoInicialDoCliente+deposito.valor)
  })

  it('Não deve criar novo registro de deposito, mantendo valor inicial', async () => {

    try {
      postDeposito = await chai.request(app)
        .post('/conta/deposito')
        .send(depositoInvalido);
    } catch (error) {
      console.error(error.message);
    }

    const {saldo: saldoFinalDoCliente} = await saldoClienteService.getByCliente(3)

    expect(saldoFinalDoCliente).to.be.eq(saldoInicialDoCliente)
  })
})

describe('ROTA POST /conta/saque', () => {
  let saldoInicialDoCliente = 0

  beforeEach(async () => {
    let { saldo } = await saldoClienteService.getByCliente(3)

    saldoInicialDoCliente=saldo

  });

  it('Deve criar novo registro de saque', async () => {
    
    try {
      postSaque = await chai.request(app)
        .post('/conta/saque')
        .send(saque);
    } catch (error) {
      console.error(error.message);
    }

    const {saldo: saldoFinalDoCliente} = await saldoClienteService.getByCliente(3)

    expect(saldoFinalDoCliente).to.be.eq(saldoInicialDoCliente-saque.valor)
  })

  it('Não deve criar novo registro de saque, mantendo valor inicial', async () => {

    try {
      postDeposito = await chai.request(app)
        .post('/conta/saque')
        .send(saqueInvalido);
    } catch (error) {
      console.error(error.message);
    }

    const {saldo: saldoFinalDoCliente} = await saldoClienteService.getByCliente(3)

    expect(saldoFinalDoCliente).to.be.eq(saldoInicialDoCliente)
  })
})