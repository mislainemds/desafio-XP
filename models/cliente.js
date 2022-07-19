const createCliente = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return Cliente;
};

module.exports = createCliente;