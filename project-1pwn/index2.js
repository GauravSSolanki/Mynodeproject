const express = require("express");
const app = express();
const cors = require("cors")
const route = express.Router()

const PORT = 3100
app.use(express.json())

const Mymiddleware=require('./middleware')

// http://localhost:3100/?age=21 use this type url

// app.use(Mymiddleware);

app.get("/", (req, res) => {
  res.send("plEAse enter");
});

// http://localhost:3100/first/?age=22

app.get('/first',Mymiddleware,(req,res)=>{ 
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
