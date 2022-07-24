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

  Compra.removeAttribute('id')
  Compra.associate = (models) => {
    Compra.belongsTo(models.Ativo, 
      { foreignKey: 'codAtivo', })
  }

  return Compra;
};

module.exports = createCompra;