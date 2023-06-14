const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Dish extends Model {}

User_Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        id: "id",
      },
    },
    dish_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "dish",
        id: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_dish",
  }
);

module.exports = User_Dish;