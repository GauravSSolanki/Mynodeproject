const dbconnect = require("./mongodb");
dbconnect();

const insertData = async () => {
  let myData = await dbconnect();
  let myData2 = await myData.insertOne({
    Name: "Gaurav",
    email: "Gaua@Solanki.com",
    password: "675658645"
  });

  console.log(myData2);
};

// insertData();

const Update = async () => {
  const myData1 = await dbconnect();
  const MyData2 = await myData1.updateMany(
    { Name : "Solanki" },
    { $set: { Name: "Bharat singh Hada", email: "HADA@Goldibrad",password:"Gaurav$4312" } }
  );
  console.log(MyData2);
}

// Update()
