const { MongoClient } = require("mongodb");
const url =
  "mongodb://127.0.0.1:27017/mongo-ref?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6";
const database = "groot-node";
const client = new MongoClient(url);

const dbconnect = async () => {
  let data1 = await client.connect();
  let data2 = data1.db(database);
  let data3 = data2.collection("Myuser");
  return data3;
};

module.exports =  dbconnect 
