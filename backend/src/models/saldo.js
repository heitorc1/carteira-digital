'use strict';
const { Sequelize, Model } = require('sequelize');
const { Usuario } = require('../models/usuario')

module.exports = (sequelize, DataTypes) => {
  class Saldo extends Model {};

  Saldo.init({
    login: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'login',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    saldo: {
      type: Sequelize.FLOAT(8),
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Saldo',
  });

  return Saldo
}