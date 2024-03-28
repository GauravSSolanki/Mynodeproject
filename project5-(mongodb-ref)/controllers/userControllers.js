const { validationResult } = require("express-validator");
const { User } = require("../models/User");
const { default: mongoose } = require("mongoose");

const registerController = async (req, res) => {

    try {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.send({ errors: result.array() });
        }

        const user = await User.create(req.body);
        res.json(user)
    } catch (error) {
        res.status(500).json({ err: error.message })
    }

}


const getUserProfileController = async (req, res) => {
    try {

        const { userId } = req.params;

        // const user = await User.findById(userId)
        // const user = await User.findById(userId).populate([
        //     { path: 'notes', select: ["title"] },
        //     { path: 'products', select: ["price"] }
        // ])

        const user = await User.findById(userId).populate('notes', ["title", 'content'])
        // console.log(user.populated('notes'))
        // user.depopulate('notes')
        // console.log(user.notes instanceof mongoose.Types.ObjectId)

        res.send(user);

    } catch (error) {
        res.status(500).send({ err: error.message })
        console.log(error)
    }
}

// const admin = require('firebase-admin');
// const serviceAccount = require('../configNotification.json'); // Path to your service account key JSON file
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
// exports.sendNotifications = async (req, res) => {
//     try {
//         var { token, title, body } = req.body;
//         // var image = req.body.thumnail_url;

//         if (!title || !token || !body) {
//             return res.status(400).json({
//                 "status": 400,
//                 "message": 'Title, token, and body are required in the request body.'
//             });
//         }
//         //var token = 'token here';
//         console.log(typeof (req.body.data), req.body.data);

//         const message = {
//             notification: {
//                 title: title,
//                 body: body,
//                 // image: image
//             },
//             token: token
//         };

//         const response = await admin.messaging().send(message);
//         console.log('Successfully sent message:', response);
//         output = {
//             "status": messages.STATUS_CODE_FOR_DATA_UPDATE,
//             "message": "Successfully sent notification"
//         }
//         return res.status(output.status).json(output);
//     }
//     catch (error) {
//         console.log("error in notifications", error);
//         output = {
//             "status": messages.STATUS_CODE_FOR_RUN_TIME_ERROR,
//             "message": "catch errror"
//         }
//         return res.status(output.status).json(output);
//     }
// }
module.exports = { registerController, getUserProfileController }
