const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Allshop",
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

module.exports = client;
