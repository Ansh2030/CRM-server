const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Customer } = require("../models/customer");
const {Order} = require('../models/order')
const app = express();



const connectdb = async()=>{
    await mongoose.connect(`mongodb+srv://anshsrivastavaofficial:${process.env.PASSWORD}@cluster0.s0f44iu.mongodb.net/CRM`)

console.log(`db is connected host = ${mongoose.connection.host}`)
}
connectdb();

// const data = new Customer({
//     username: "anshs", 
//     email: "anshsricataa",
//     lastLogin: "july",
//     n_visits: 12,
//     total_spend: 10000,
//     n_orders: 12
// })



router.post("/customerData", async (req, res) => {

const data = req.body;

if(data){
    const d = new Customer(data);
     const g= await d.save();
     res.send(g);
}
else
res.send("fault in storing");



});



router.post("/order", async (req, res) => {

    const data = req.body;
    console.log(data);
    if(data){
        const d = new Order(data);
         const g= await d.save();
         res.send(g);
    }
    else
    res.send("fault in storing");
    
    
    
    });


module.exports = router;