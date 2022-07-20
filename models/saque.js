const createSaque = (sequelize, DataTypes) => {
  const Saque = sequelize.define('Saque', {
    codCliente: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    valor: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: false,
  });
  Saque.removeAttribute('id')

  return Saque;
};

module.exports = createSaque;