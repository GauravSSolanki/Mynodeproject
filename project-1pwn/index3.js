const mongoose = require("mongoose");
const express = require("express");

const app = express();
const cors = require("cors");
const PORT = 4100;

app.use(express.json());
app.use(cors());

const connectDb = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/project")
    .then(() => console.log("mongodb conncted"))
    .catch((err) => console.log(err));
};
connectDb();

const ProductSchema = new mongoose.Schema({
  Name: String,
  price: Number,
  category: String,
  brand: String,
});

// Define the model based on the schema
const ProductModel = mongoose.model("products", ProductSchema);

const senddata = async () => {
  try {
    const result = await new ProductModel({
      Name: "vivo",
      price: 22000,
      category: "Mobile",
      brand: "iphone",
    });
    let abc = await result.save();
    console.log(abc);
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

senddata();

const getData = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  const data = await ProductModel.find({ Name: "vivo" });
  console.log(data);
};
getData();

const Delete = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  const data = await ProductModel.deleteMany({ Name: "oppo" });
  console.log(data);
};
Delete();

const update = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  const data = await ProductModel.updateOne(
    { Name: "vivo" },
    {
      $set: { Name: "oppo", price: 19000, brand: "chineese" },
    }
  );
  console.log(data);
};
// update();

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("server is listning on http://localhost:" + PORT);
//   }
// });
