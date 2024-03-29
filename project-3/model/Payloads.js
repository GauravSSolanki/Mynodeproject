const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
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

module.exports = mongoose.model("Payloads", userSchema);