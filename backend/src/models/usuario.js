'use strict';
const { Sequelize,
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {};

  Usuario.init({
    login: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    sequelize: sequelize,
    modelName: 'Usuario',
  });

  return Usuario
}