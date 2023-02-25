/** @format */

const express = require("express");

const {
  getListProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductsAll,
} = require("../controllers/product");
// const { addImage } = require("../controllers/image");

const { getRatingById, addRating } = require("../controllers/rating");

const { getOrder, addOrder, updateOrder } = require("../controllers/orders");
const { registerUser, loginUser } = require("../controllers/user");

const wrap = require("../helpers/wrapper");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const multer = require("../middleware/upload");

const router = express.Router();

//---------------------------------------------------------
router.get("/products", wrap(getListProduct));
router.get("/products/:id", wrap(getProductById));
router.post("/products", authAdmin, multer.single("img"), wrap(addProduct));
router.put("/products/all", authAdmin, wrap(deleteProductsAll));
router.put(
  "/products/:id",
  authAdmin,
  multer.single("img"),
  wrap(updateProduct)
);

//----------------------------------------------------------
router.get("/order", authAdmin, wrap(getOrder));
router.post("/order", auth, wrap(addOrder));
router.put("/order", authAdmin, wrap(updateOrder));

//----------------------------------------------------------
router.post("/user/auth", wrap(registerUser));
router.post("/user/login", wrap(loginUser));

//----------------------------------------------------------
router.get("/rating", auth, wrap(getRatingById));
router.post("/rating", auth, wrap(addRating));

module.exports = router;
