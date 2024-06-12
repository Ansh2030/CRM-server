const {model} = require('mongoose');
exports.Order= model('Orders',{
    user:String,
    item:String,
    price: Number
})