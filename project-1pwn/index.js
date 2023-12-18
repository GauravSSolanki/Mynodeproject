const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3100;
app.use(express.json());
app.use(cors());

let user = [];

app.post("/user", (req, res) => {
  user.push(req.body);
  res.send(user);
});

app.get("/", (req, res) => {
  res.send(JSON.stringify(user));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listning on http://localhost:" + PORT);
  }
});
