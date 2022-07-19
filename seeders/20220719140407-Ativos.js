module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Ativos',
      [{
        id: 1,
        nome: 'AZUL4',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 2,
        nome: 'TOTS3',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 3,
        nome: 'ALPA4',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 4,
        nome: 'GOLL4',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 5,
        nome: 'MRFG3',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 6,
        nome: 'VALE3',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 7,
        nome: 'PETR4',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 8,
        nome: 'MGLU3',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 9,
        nome: 'ITUB4',
        quantidade: 200,
        valor: 100.65,
      },
      {
        id: 10,
        nome: 'PRIO3',
        quantidade: 200,
        valor: 100.65,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Ativos', null, {});
  },
};
