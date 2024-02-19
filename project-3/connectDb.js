const mongoose = require("mongoose");
// const url = ''

const connectDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/project?')
        .then(() => console.log('mongodb conncted'))
        .catch(err => console.log(err))
}

module.exports = connectDb