const createDeposito = (sequelize, DataTypes) => {
  const Deposito = sequelize.define('Deposito', {
    codCliente: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    valor: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: false,
  });

  return Deposito;
};

module.exports = createDeposito;