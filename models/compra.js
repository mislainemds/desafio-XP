const createCompra = (sequelize, DataTypes) => {
  const Compra = sequelize.define('Compra', {
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

  return Compra;
};

module.exports = createCompra;