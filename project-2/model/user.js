const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    Name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    }
  },
  { strict: true }
);

module.exports = mongoose.model("user", userSchema)