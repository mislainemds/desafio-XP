const createAtivo = (sequelize, DataTypes) => {
  const Ativo = sequelize.define('Ativo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: false,
  });

  return Ativo;
};

module.exports = createAtivo;