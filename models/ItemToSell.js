const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const ItemToSell = sequelize.define(
  "ItemToSell",
  {
    seller_id: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: "seller_id cannot be null" },
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    quantity_left: {
      type: DataTypes.INTEGER,
      validate: {
        min: { args: 1, msg: "quantity should be more than or equal to 1" },
        isInt: { msg: "quantity must be an interger" },
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "price cannot be null",
        },
        isInt: {
          msg: "price must be int",
        },
      },
    },
    discount: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "price cannot be null",
        },
        isInt: {
          msg: "price must be int",
        },
      },
    },
  },

  {
    tableName: "items_for_sale",
  }
);
