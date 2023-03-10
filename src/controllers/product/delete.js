/** @format */
const Product = require("../../db/schema/product");

const deleteProductsAll = async function (req, res, next) {
  //----delete all products----//
  const response = req.body.options.map(
    async (id) => await Product.findByIdAndDelete(id)
  );
  //----is response empty?----//
  if (!response) {
    throw RequestError(404);
  }
  return res.json({ message: "Products remove", response });
};

module.exports = deleteProductsAll;
