const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const ItemToSell = sequelize.define("ItemToSell", {
  seller_id: {
    type: DataTypes.INTEGER,
    validate: {
      notNull: { msg: "seller_id cannot be null" },
    },
  },
});
