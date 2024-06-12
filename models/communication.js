// // const mongoose = require('mongoose');

// const communicationLogSchema = new mongoose.Schema({
//     audience: Array,
//     message: String,
//     sentAt: Date,
//     status: String,
//     sentCount: Number,
//     failedCount: Number
// });

// const CommunicationLog = mongoose.model('CommunicationLog', communicationLogSchema);

// module.exports = CommunicationLog;

const {model} = require("mongoose");

exports.CommunicationLog = model('CommunicationLog',{ 
    audience: Array,
    message: String,
    sentAt: Date,
    status: String,
    sentCount: Number,
    failedCount: Number
});
