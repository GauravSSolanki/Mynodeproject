// const product = require("./product");
// const express = require("express");
// const PORT = 3200;

// const app = express();
// app.use(express.json());

// const { MongoClient } = require("mongodb");
// const url =
//   "mongodb://127.0.0.1:27017/mongo-ref";
// const database = "project";
// const client = new MongoClient(url);

// const dbconnect = async () => {
//   let data1 = await client.connect();
//   let data2 = data1.db(database);
//   let data3 = data2.collection("Mainproducts");
//   return data2;
// };

// // module.exports =  dbconnect
// dbconnect();

// app.post("/create", async (req, res) => {
// dbcoonect();
//   let data = new product(req.body);
//   let result = await data.save();
//   console.log(result);
//   res.send(data);
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("server is listning on http://localhost:" + PORT);
//   }
// });


const product = require("./product");
const express = require("express");
const { MongoClient } = require("mongodb");

const PORT = 3200;
const url = "mongodb://127.0.0.1:27017/mongo-ref";
const database = "project";

const app = express();
app.use(express.json());

const client = new MongoClient(url);

const dbConnect = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Specify the collection you want to use
    return client.db(database).collection("Mainproducts");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error for the calling code to handle
  }
};

// Start the MongoDB connection
const mainProductsCollection = dbConnect();

app.post("/create", async (req, res) => {
  try {
    // Ensure that the Mainproducts collection is available before proceeding
    const collection = await mainProductsCollection;

    // Create a new product instance
    const data = new product(req.body);

    // Save the product to the Mainproducts collection
    const result = await collection.insertOne(data);
    
    // Log the result (this might be the insertId or other details)
    console.log("Product inserted:", result);

    // Send the saved product as the response
    res.status(201).json(data);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log("Server is listening on http://localhost:" + PORT);
});

// Handle process termination to close the MongoDB connection
process.on("SIGINT", async () => {
  try {
    await client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    process.exit(1);
  }
});
