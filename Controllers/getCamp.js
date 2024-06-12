const mongoose = require('mongoose');
const {CommunicationLog} = require('../models/communication');

const getData = async (req, res)=>{
try{
    const data = await CommunicationLog.find();
    console.log(data.length);
    res.status(200).send(data);
} catch (err) {
    res.status(500).json({ message: err.message });
}

}

module.exports= {getData};
