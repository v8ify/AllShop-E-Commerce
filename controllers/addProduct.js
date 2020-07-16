const client = require("../db/index");

exports.addProduct = function (req, res, next) {
  const {
    seller_id,
    name,
    quantity_left,
    description,
    price,
    discount,
  } = req.body;

  const queryText =
    "INSERT INTO items_for_sale(seller_id, name, quantity_left, description, price, discount) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";

  const values = [seller_id, name, quantity_left, description, price, discount];

  client.query(queryText, values, function (err, result) {
    if (err) {
      return next(err);
    }

    res.status(200).json({ success: true, data: result.rows });
  });
};
