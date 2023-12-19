const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3100;

app.use(express.json());
app.use(cors());

const dbconnect = require("./mongodb");
dbconnect();

app.get("", async (req, res) => {
  let Data1 = await dbconnect();
  console.log(Data1)
  let Data2 = await Data1.find().toArray();
  res.send(Data2);
});

app.post("/adduserstatic", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.insertOne({
    "Name":"gaurav singh",
    "email":"gauPhra@gmail.com",
    "password":"Solanki7555"
});
  res.send(Data2)
});

app.post("/adduserdynamic", async (req, res) => {
  let Data1 = await dbconnect();
  let Data2 = await Data1.insertOne(req.body);
  res.send(Data2)
});

// let user = [];

// app.post("/user", (req, res) => {
//   user.push(req.body);
//   res.send(user);
// });

// app.get("/", (req, res) => {
//   res.send(JSON.stringify(user));
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listning on http://localhost:" + PORT);
  }
});
