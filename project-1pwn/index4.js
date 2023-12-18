
// const getData = async () => {
//     let data1 = await client.connect()
//     let data2 = data1.db(database)
//     let data3 = data2.collection("users")
//     let data4 = await data3.find().toArray()
//     console.log(data4)
// }

// getData()

const dbconnect=require('./mongodb');


const getData=async()=>{
    let myData=await dbconnect();
    let data4 = await myData.find().toArray()
    console.log(data4)
}

// getData()

//delete any object in Api fatching from database collection 

const deleteData= async ()=>{
  let myData=await dbconnect()
  let myData2=myData.deleteMany({ Name:"xyz" })
  console.log(myData2)
}

// deleteData();

const insertData=async ()=>{
  let myData= await dbconnect()
  let myData2= await myData.insertOne({
 Name:"hjh",email:"GauPanahra$fhggt.com",password:"67565865"
  })
 
  console.log(myData2)
 }
 
 insertData();