module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Depositos',
      [{
        codCliente: 1,
        valor: 7120,
      },
      {
        codCliente: 1,
        valor: 3355,
      },
      {
        codCliente: 2,
        valor: 9135,
      },
      {
        codCliente: 3,
        valor: 8555,
      },
      {
        codCliente: 4,
        valor: 5015,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Depositos', null, {});
  },
};
