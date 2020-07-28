const ItemToSell = require("../models/ItemToSell");

exports.addProduct = async function (req, res, next) {
  const {
    seller_id,
    name,
    quantity_left,
    description,
    price,
    discount,
  } = req.body;

  let item = ItemToSell.build({
    seller_id,
    name,
    quantity_left,
    description,
    price,
    discount,
  });

  let result;
  try {
    result = await item.save();
  } catch (error) {
    next(error);
  }

  res.status(200).json({ success: true, data: result });
};
