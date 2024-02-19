const express = require("express");
const connectDb = require("./connectDb");
const Payloads = require("./model/Payloads");
const bcrypt = require("bcrypt");
const { validationResult, body } = require('express-validator');

connectDb();
const app = express();
app.use(express.json());
const PORT = 1400;


const myValidations = [
   
    body('email', "Invalid email").isEmail(),
    body('password', "Invalid Password").isStrongPassword(),
]

app.post("/Payloads",myValidations, async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }
    else if (!email) {
      return res.send({ err: "email is required" });
    } else if (!password) {
      return res.send({ err: "password is required" });
    }

    const Data = await Payloads.findOne({ email: req.body.email });

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    req.body.password = hashPassword;

    // null, undefined , 0 => false
    if (Data) {
      return res.send({ err: "user already exists" });
    }

    let response = await Payloads.create(req.body);
    res.send(response);
  } catch (error) {
    console.log(error)
    res.send({ err: error.message });
  }
});

app.get("/", async (req, res) => {
    let data = await Payloads.find();
    res.send(data);
  });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listning on http://localhost:" + PORT);
  }
});
