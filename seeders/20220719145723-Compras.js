module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Compras',
      [{
        codCliente: 1,
        codAtivo: 2,
        quantidade: 20,
        valor: 2013,
      },
      {
        codCliente: 1,
        codAtivo: 4,
        quantidade: 25,
        valor: 2516.65,
      },
      {
        codCliente: 1,
        codAtivo: 2,
        quantidade: 15,
        valor: 1509.75,
      },
      {
        codCliente: 2,
        codAtivo: 3,
        quantidade: 45,
        valor: 4529.25,
      },
      {
        codCliente: 3,
        codAtivo: 8,
        quantidade: 22,
        valor: 2214.30,
      },
      {
        codCliente: 3,
        codAtivo: 6,
        quantidade: 30,
        valor: 3019.50,
      },
      {
        codCliente: 4,
        codAtivo: 3,
        quantidade: 15,
        valor: 1509.75,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Compras', null, {});
  },
};
