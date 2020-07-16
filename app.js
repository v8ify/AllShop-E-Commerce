require("dotenv").config();
const express = require("express");
const { Client } = require("pg");
const morgan = require("morgan");
const chalk = require("chalk");

// Routes imports
const productRoutes = require("./routes/products");

// postgres client import
const client = require("./db/index");

const app = express();

// connecting to database
client.connect(err =>
  err
    ? console.log(chalk.red(err))
    : console.log(chalk.blue("Database connected"))
);

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
