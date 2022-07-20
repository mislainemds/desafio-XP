const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai')

const app = require('../src/app');

chai.use(chaiHttp);

const contaSaldo = {
  codCliente: 1,
  saldo: 3594.5,
}


let getConta;

describe('ROTA GET /conta/{codCliente}', () => {
  before(async () => {
    try {
      const { codCliente } = contaSaldo;
      getConta = await chai.request(app)
        .get(`/conta/${codCliente}`)
    } catch (error) {
      console.error(error.message);
    }
  });
  
  it('Deve retornar dados da conta do Cliente', () => {
    const { body } = getConta;
    expect(body).to.be.eqls(contaSaldo);
  });
})
