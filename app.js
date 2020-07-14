const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");

const app = express();

app.use(morgan("dev"));

app.get("/", function (req, res) {
  res.json({ success: true });
});

app.use(function (err, req, res, next) {
  console.log(chalk.red(err.stack));
  res.status(400).json({ success: false, error: err.message });
});

app.listen(8000, () =>
  console.log(chalk.yellow("Server started on port 8000"))
);
