const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const shell = require("shelljs");

const app = require("../../src/app");
const ativosService = require("../../services/ativosService");
const saldoClienteService = require("../../services/saldoClienteService");

chai.use(chaiHttp);

const compra = {
  codCliente: 3,
  codAtivo: 3,
  quantidade: 1,
};

const compraQtdeGrande = {
  codCliente: 3,
  codAtivo: 3,
  quantidade: 2,
};

const compraInvalida = {
  codCliente: 3,
  codAtivo: 3,
  quantidade: 0,
};

describe("ROTA POST /investimentos/comprar", () => {
  let saldoInicialDoCliente = 0;
  let qtdeInicialDeAtivo = 0;
  let precoDoAtivo = 0;

  beforeEach(async () => {
    await shell.exec(
      [
        "npx sequelize-cli db:migrate:undo:all",
        "npx sequelize-cli db:migrate",
        "npx sequelize-cli db:seed:all",
      ].join(" && "),
      { silent: process.env.DEBUG === "false", async: false }
    );

    let { saldo } = await saldoClienteService.getByCliente(3);
    saldoInicialDoCliente = saldo;

    let { quantidade, valor } = (await ativosService.getAtivo(3)).dataValues;
    qtdeInicialDeAtivo = quantidade;
    precoDoAtivo = valor;
  });

  it("Deve criar novo registro de compra", async () => {
    postDeposito = await chai
      .request(app)
      .post("/investimentos/comprar")
      .send(compra);

    const { saldo: saldoFinalDoCliente } =
      await saldoClienteService.getByCliente(3);
    expect(
      saldoFinalDoCliente,
      `saldo deve ser alterado para ${saldoInicialDoCliente}-${precoDoAtivo}`
    ).to.be.eq(saldoInicialDoCliente - precoDoAtivo);

    let { quantidade: quantidadeFinalDeAtivo } = (
      await ativosService.getAtivo(3)
    ).dataValues;
    expect(
      quantidadeFinalDeAtivo,
      `qtde ativo deve ser alterado para ${qtdeInicialDeAtivo}-${compra.quantidade}`
    ).to.be.eq(qtdeInicialDeAtivo - compra.quantidade);
  });

  it("Deve criar novo registro de compra com alta quantidade", async () => {
    postDeposito = await chai
      .request(app)
      .post("/investimentos/comprar")
      .send(compraQtdeGrande);

    const { saldo: saldoFinalDoCliente } =
      await saldoClienteService.getByCliente(3);
    expect(
      saldoFinalDoCliente,
      `saldo deve ser decrementado para ${saldoInicialDoCliente}-${
        precoDoAtivo * compraQtdeGrande.quantidade
      }`
    ).to.be.eq(
      saldoInicialDoCliente - precoDoAtivo * compraQtdeGrande.quantidade
    );

    let { quantidade: quantidadeFinalDeAtivo } = (
      await ativosService.getAtivo(3)
    ).dataValues;
    expect(
      quantidadeFinalDeAtivo,
      `qtde ativo deve ser decrementado para ${qtdeInicialDeAtivo}-${compraQtdeGrande.quantidade}`
    ).to.be.eq(qtdeInicialDeAtivo - compraQtdeGrande.quantidade);
  });

  it("Não deve criar novo registro de compra, qtde inválida <= 0", async () => {
    postDeposito = await chai
      .request(app)
      .post("/investimentos/comprar")
      .send(compraInvalida);

    const { saldo: saldoFinalDoCliente } =
      await saldoClienteService.getByCliente(3);
    expect(
      saldoFinalDoCliente,
      "saldo do cliente deve ser mantido inalterado"
    ).to.be.eq(saldoInicialDoCliente);

    let { quantidade: quantidadeFinalDeAtivo } = await ativosService.getAtivo(
      3
    );
    expect(quantidadeFinalDeAtivo).to.be.eq(qtdeInicialDeAtivo);
  });

  it("Não deve criar novo registro de compra, qtde ativos insuficiente", async () => {
    postDeposito = await chai
      .request(app)
      .post("/investimentos/comprar")
      .send({
        ...compra,
        quantidade: qtdeInicialDeAtivo + 1,
      });

    const { saldo: saldoFinalDoCliente } =
      await saldoClienteService.getByCliente(3);
    expect(saldoFinalDoCliente).to.be.eq(saldoInicialDoCliente);

    let { quantidade: quantidadeFinalDeAtivo } = await ativosService.getAtivo(
      3
    );
    expect(quantidadeFinalDeAtivo).to.be.eq(qtdeInicialDeAtivo);
  });

  it("Não deve criar novo registro de compra, saldo do cliente insuficiente", async () => {
    postDeposito = await chai
      .request(app)
      .post("/investimentos/comprar")
      .send({
        ...compra,
        quantidade: qtdeInicialDeAtivo,
      });

    const { saldo: saldoFinalDoCliente } =
      await saldoClienteService.getByCliente(3);
    expect(saldoFinalDoCliente).to.be.eq(saldoInicialDoCliente);

    let { quantidade: quantidadeFinalDeAtivo } = await ativosService.getAtivo(
      3
    );
    expect(quantidadeFinalDeAtivo).to.be.eq(qtdeInicialDeAtivo);
  });
});