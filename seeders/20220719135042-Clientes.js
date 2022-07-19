module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clientes',
      [{
        id: 1,
        nome: 'Caio Vilar',
        email: 'caio19@gmail.com',
        senha: '123456',
      },
      {
        id: 2,
        nome: 'Sergio Oliveira',
        email: 'sergio23@gmail.com',
        senha: '123456',
      },
      {
        id: 3,
        nome: 'Lucas Santana',
        email: 'lucas33@gmail.com',
        senha: '123456',
      },
      {
        id: 4,
        nome: 'Leonardo Carvalho',
        email: 'leonardo35@gmail.com',
        senha: '123456',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
