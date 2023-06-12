const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sumary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    steps:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
