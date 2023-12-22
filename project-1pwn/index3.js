const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Groot-noon")

const ProductSchema = new mongoose.Schema({
  Name: String,
  price: Number,
  category: String,
  brand: String,
});

const senddata = async() => {
  let ProductModel = new mongoose.ProductModel("products", ProductSchema);
  const result = new ProductModel({
    Name: "iphone",
    price: 50000,
    category: "Mobile",
    brand: "iphone",
  });
  let abc =await result.save();
  console.log(abc);
};

senddata();
