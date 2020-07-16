const express = require("express");
const router = express.Router();

// importing controllers
const { addProduct } = require("../controllers/addProduct");

// Each path has prefix /products
router.route("/add").post(addProduct);

module.exports = router;
