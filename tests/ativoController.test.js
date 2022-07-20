const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");

const app = require("../src/app");

chai.use(chaiHttp);

const ativo1 = {
  id: 1,
  nome: "AZUL4",
  quantidade: 200,
  valor: 100.65,
};

describe("ROTA GET /ativos/1", () => {
  it("Deve retornar ativo AZUL4", async () => {

    const { body: ativoRetornado } = await chai.request(app).get("/ativos/1");

    expect(ativoRetornado).to.be.eql(ativo1);
  });
});
