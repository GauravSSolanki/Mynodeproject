const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: String,
    price: Number
  },
  { strict: true }
);

module.exports = mongoose.model("product", productSchema);
