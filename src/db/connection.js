/** @format */

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectMongoDB = async () => {
  //-----connectMongoDB-------------------//
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connection successful");
};

module.exports = connectMongoDB;
