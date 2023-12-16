const mongoose = require("mongoose");


const connectDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/groot-node')
        .then(() => console.log('mongodb conncted And This User Collection in groot-node database'))
        .catch(err => console.log(err))
}

module.exports = connectDb