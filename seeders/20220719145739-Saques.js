module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Saques',
      [{
        codCliente: 1,
        valor: 2350.85,
      },
      {
        codCliente: 2,
        valor: 1555.95,
      },
      {
        codCliente: 3,
        valor: 3035.55,
      },
      {
        codCliente: 4,
        valor: 1035.55,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Saques', null, {});
  },
};
