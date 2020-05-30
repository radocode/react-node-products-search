module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define("producto", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },
    precio: {
      type: Sequelize.STRING
    },
    marcaId: {
      type: Sequelize.INTEGER
    },
  }, {
    tableName: 'producto',
    freezeTableName: true,
    timestamps: false
  });

  return Producto;
};
