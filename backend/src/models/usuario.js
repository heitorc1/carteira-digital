'use strict';
const { Sequelize, Model }  = require('sequelize');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {};

  Usuario.init({
    login: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 3
      }
    },
    senha: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        min: 4
      }
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 4
      }
    },
    senhaTexto: {
      type: Sequelize.VIRTUAL,
    }
  }, {
    hooks: {
      beforeValidate: async usuario => {
        usuario.senhaTexto = usuario.senha
      },
      beforeCreate: async usuario => {
        usuario.senha = await bcrypt.hash(usuario.senha, 8)
      }
    },
    sequelize: sequelize,
    modelName: 'Usuario',
  });

  Usuario.prototype.checarSenha = function(senha) {
    return bcrypt.compare(senha, this.senha)
  }

  Usuario.prototype.criarToken = function() {
    return jwt.sign({ login: this.login }, process.env.APP_SECRET)
  }

  return Usuario
}