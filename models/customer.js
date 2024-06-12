const {model} = require("mongoose");

exports.Customer = model('Customer',{ 
    username: String, 
    email: String,
    lastLogin: Date,
    n_visits: Number,
    total_spend: Number,
    n_orders: Number
});
