'use strict';
const { Sequelize, Model } = require('sequelize');
const { Usuario } = require('../models/usuario')

module.exports = (sequelize, DataTypes) => {
  class Movimentacao extends Model {};

  Movimentacao.init({
    id_transacao: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    data: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    login_origem: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'login',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    login_destino: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'login',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    valor_transferido: {
      type: Sequelize.FLOAT(8),
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    modelName: 'Movimentacao',
  });

  return Movimentacao
}