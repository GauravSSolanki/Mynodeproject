const express = require("express");
const app = express();

const cors = require('cors');
const path = require('path');

app.use(cors());
// const { ChildProcess } = require("child_process");

app.get("/", (req, res) => {
//   console.log("this is console out");
  res.send("this is api get method");
});

// function abc()
// {
//     console.log("first")
// }
app.get("/demo", (req, res) => {
  console.log("");
});

app.get("/index1", (req, res) => {
  console.log("this is console out");
  res.send("this is api post method");
});

app.get("/soap", (req, res) => {
let filePath = path.join(__dirname,'./abc.html');
console.log(filePath);
res.sendFile(filePath)
});
// app.listen(3000, ()=>{
//     console.log("server is running in http://localhost:3000 port in my ram write now");
// })

app.listen(1300, () => {
  console.log(
    "server is running in http://localhost:3000 port in my ram write now"
  );
});
