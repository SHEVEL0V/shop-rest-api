/** @format */
const Product = require("../../db/schema/product");
const { uploadFile } = require("../../upload");

const updateProduct = async function (req, res, next) {
  const { path, filename } = req.file || {};
  const { id } = req.params;

  let img = req.body.img;

  if (path) {
    const { mediaLink } = await uploadFile(path, filename);
    img = mediaLink;
  }
  const response = await Product.findByIdAndUpdate(id, { ...req.body, img });

  return res.status(200).json(response);
};

module.exports = updateProduct;