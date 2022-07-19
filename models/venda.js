const createVenda = (sequelize, DataTypes) => {
  const Venda = sequelize.define('Venda', {
    codAtivo: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    codCliente: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: false,
  });

  return Venda;
};

module.exports = createVenda;