require("dotenv").config();
const express = require("express");
const { Sequelize } = require("sequelize");
const morgan = require("morgan");
const chalk = require("chalk");

// Routes imports
const productRoutes = require("./routes/products");

const app = express();

// connecting to database
const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize
  .authenticate()
  .then(() => console.log(chalk.yellow("Database connected successfully")))
  .catch(error => console.log(chalk.red("Database connection failed ", error)));

// Logger
app.use(morgan("dev"));

//Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.json({ success: true });
});

// path to products.js
app.use("/products", productRoutes);

// Error handler
app.use(function (err, req, res, next) {
  console.log(chalk.red(err.stack));
  res.status(400).json({ success: false, error: err.message });
});

app.listen(8000, () => console.log(chalk.blue("Server started on port 8000")));
