'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_tanaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_tanaman.init({
    nama: DataTypes.STRING,
    kategori: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    img: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_tanaman',
  });
  return tb_tanaman;
};