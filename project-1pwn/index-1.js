const http = require("http");
const YTdata = require("./YTdata");
const fs = require("fs");

const path = require("path");

// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid inputs");
// }

// function DataControl(req,res){
//     res.write("<h1>Hello ,This is my node project</h1>")
//     res.end()
//   }
//  http.createServer(DataControl).listen(2100)

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(YTdata));
    res.end();
  })
  .listen(3500);