const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  Name: String,
  price: Number,
  category: String,
  brand: String,
});

module.exports = mongoose.model("Mainproducts", ProductSchema);

// module.exports = ProductModel ;
