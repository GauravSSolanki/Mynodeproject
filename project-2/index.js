// const express = require("express");
// const connectDb= require("./connectDb");
// const app = express();
// const port = 1400;
// const mongoose = require("mongoose");

// const product = require("./product");

// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/groot-node")
//   .then(() => console.log("db connected"))
//   .catch((err) => console.log(err));

// app.get("/", async (req, res) => {
//   // product.create({
//   //     title:"Laptop",
//   //     price:4025
//   // })
//   res.send("hello");
// });

// app.get('/', async (req, res) => {
//     let data= await product.find();
//     res.send(data);
// });

// app.post("/", async (req, res) => {
//   // product.create({
//   //     title:"Laptop",
//   //     price:4025
//   // })

//   product.create(req.body).catch((err) => console.log(err));
//   res.send("Done Post Data");
// });

// app.delete('/:id', async (req, res) => {
//     await product.findByIdAndDelete(req.params.id);
//     res.send("done delete");
// });

// app.put('/:id', async (req, res) => {
//   await product.findByIdAndUpdate(req.params.id , req.body ,{pverwrite:true});
//   res.send("done Update");
// });

// //put data uda dega
// //patch nhi udayega
// app.patch('/:id', async (req, res) => {
//   await product.findByIdAndUpdate(req.params.id , req.body);
//   res.send("done Update");
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`listning on http://localhost:${port}`);
//   }
// });

const express = require("express");
const connectDb = require("./dbConnect");
const user = require("./model/user");
const bcrypt = require("bcrypt");

connectDb();
const app = express();
app.use(express.json());
const PORT = 1400;

app.get('/', async (req, res) => {
    let data= await user.find();
    res.send(data);
});

app.post("/register", async (req, res) => {
  try {
    const { Name, email, password } = req.body;

    if (!Name) {
      return res.send({ err: "name is required" });
    } else if (!email) {
      return res.send({ err: "email is required" });
    } else if (!password) {
      return res.send({ err: "password is required" });
    }

    const USER = await user.findOne({ email: req.body.email });

    // null, undefined , 0 => false
    if (USER) {
      return res.send({ err: "user already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    req.body.password = hashPassword;

    let response = await user.create(req.body)
    res.send(response)
  
  } catch (error) {
    res.send({ err: error });
  }
});


app.post("/login", async (req, res) => {
  try {
    
  } catch (error) {
    res.send({ err: error })
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listning on http://localhost:" + PORT);
  }
});
