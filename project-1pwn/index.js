const express = require("express");

const mongodb =require('mongodb')
const app = express();
const cors = require("cors");
const PORT = 3100;

app.use(express.json());
app.use(cors());

const dbconnect = require("./mongodb");
dbconnect();

app.get("/get", async (req, res) => {
  let Data1 = await dbconnect();
  console.log(Data1);
  let Data2 = await Data1.find().toArray();
  res.send(Data2);
});

app.post("/adduserstatic", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.insertOne({
    Name: "gaurav singh",
    email: "gauPhra@gmail.com",
    password: "Solanki7555",
  });
  res.send(Data2);
});

app.delete("/remove", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.deleteOne({ Name: "VijayraJ Hada" });
  res.send(Data2);
});

app.put("/update", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.updateOne(
    { Name: "Gaurav" },
    { $set: { Name: "abcxyz", email: "Solanki@gaurav", password: "vhgggfgh" } }
  );
  res.send(Data2);
});

app.post("/adduserdynamic", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.insertOne(req.body);
  res.send(Data2);
});

app.put("/chnagedynamic", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.updateOne(
    { Name: req.body.Name },
    { $set: req.body }
  );
  res.send(Data2);
});

app.put("/:id", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.updateOne(
    { _id : new mongodb.ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.send(Data2);
});

app.put("/:_id", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.updateOne(
    { Name : req.params._id },
    { $set: req.body }
  );
  res.send(Data2);
});

app.delete("/:id", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.deleteOne({ _id : new mongodb.ObjectId(req.params.id) })
  res.send(Data2)
});

app.delete("/:Name", async (req, res) => {
    let Data1 = await dbconnect();
    let Data2 = await Data1.deleteOne(req.params)
    res.send(Data2)
})

// let user = [];

// app.post("/user", (req, res) => {
//   user.push(req.body);
//   res.send(user);
// });

// app.get("/", (req, res) => {
//   res.send(JSON.stringify(user));
// });

// const path = require("path");
// const Filepath = path.join(__dirname, "public");

// app.get("/", (req, res) => {
//   res.sendFile(`${Filepath}/index.html`);
// });

// app.get("/about", (req, res) => {
//   res.sendFile(`${Filepath}/about.html`);
// });

// app.get("/contact", (req, res) => {
//   res.send(
//     `<div>
//       <h1 class="">This Contact</h1>
//       <a href="/">GO to Home page</a>
//     </div>`
//   );
// });

// app.get("*", (req, res) => {
//   res.sendFile(`${Filepath}/error.html`);
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listning on http://localhost:" + PORT);
  }
});
