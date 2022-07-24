const createAtivo = (sequelize, DataTypes) => {
  const Ativo = sequelize.define('Ativo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      get(valueName){
        const value = this.getDataValue(valueName)
        return value === null ? null : parseFloat(value)
      }
    }
    
  },
  {
    timestamps: false,
  });

  Ativo.associate = (models) => {
    Ativo.hasMany(models.Venda, {
      foreignKey: 'codAtivo',
    }),
    Ativo.hasMany(models.Compra, {
      foreignKey: 'codAtivo',
    })
  }

  return Ativo;
};

module.exports = createAtivo;