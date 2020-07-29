const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Customer = sequelize.define("Customer", {
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: { msg: "email is required" },
    },
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: { msg: "name is required." },
    },
  },
});
