const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3100;
// app.use(express.json());

function Mymiddleware(req, res, next) {
  if (req.query.age >= 18) {
    res.send("this my websikte");
  } else if (req.query.age < 18) {
    res.send("Adult only");
  } else {
   next();
  }
}

// http://localhost:3100/?age=21 use this type url

app.use(Mymiddleware);

app.get("/", (req, res) => {
  res.send("plEAse enter");
});

// http://localhost:3100/first/?age=22

app.get('/first',(req,res)=>{
    res.send("this my first api solution")
})

app.get('/second',(req,res)=>{
    res.send("this my second api solution")
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listning on http://localhost:" + PORT);
  }
});
