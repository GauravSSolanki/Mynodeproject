const dbconnect = require("./mongodb")

dbconnect()

const deleteData= async ()=>{
    let myData=await dbconnect()
    let myData2=myData.deleteMany({ Name:"xyz" })
    console.log(myData2)
  }
  
  // deleteData();