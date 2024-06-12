require("dotenv").config();
const express = require("express");
const cors = require('cors');
// const mongoose = require("mongoose");
// const { Cat } = require("./models");



const app = express();
app.use(cors());
app.use(express.json());
//routes
app.use("/", require("./routes/publisher"));
app.use("/store", require("./routes/consumer"));

app.use('/customers',require('./routes/customer'));
app.use('/campaigns',require('./routes/campaigns'));
// app.use('/order', require('./routes/order'));

const port =  process.env.PORT|| 8080;
app.listen(port,()=> console.log(`listening on port ${port}`));