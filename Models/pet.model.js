const { sequelize } = require("../Config/db.sequelize.js");
const DataTypes = require("sequelize");
const { Model } = require("sequelize");

class PetModel extends Model {}

PetModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    race: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "pet",
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = PetModel;
