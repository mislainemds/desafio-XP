module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Vendas',
      [{
        codCliente: 1,
        codAtivo: 2,
        quantidade: 3,
        valor: 301.95,
      },
      {
        codCliente: 1,
        codAtivo: 4,
        quantidade: 7,
        valor: 704.55,
      },
      {
        codCliente: 1,
        codAtivo: 2,
        quantidade: 5,
        valor: 503.25,
      },
      {
        codCliente: 2,
        codAtivo: 3,
        quantidade: 13,
        valor: 1308.45,
      },
      {
        codCliente: 3,
        codAtivo: 8,
        quantidade: 11,
        valor: 1107.15,
      },
      {
        codCliente: 3,
        codAtivo: 6,
        quantidade: 13,
        valor: 1308.45,
      },
      {
        codCliente: 4,
        codAtivo: 3,
        quantidade: 5,
        valor: 503.25,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Vendas', null, {});
  },
};
