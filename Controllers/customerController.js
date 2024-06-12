const {Customer} = require('../models/customer');

const getCustomers = async (req, res) => {
    console.log(req.body);
    const { rules, op } = req.body;
    let query = {};

    rules.forEach(rule => {
        const { field, operator, value } = rule;
       
        switch (operator) {
            case '>':
                query[field] = { $gt: value };
                break;
            case '>=':
                query[field] = { $gte: value };
                break;
            case '<':
                query[field] = { $lt: value };
                break;
            case '<=':
                query[field] = { $lte: value };
                break;
            case '=':
                query[field] = value;
                break;
        }
    });

    try {
       
       
       
        
         const customers = op=='AND'? await Customer.find({ $and: [query] }):await Customer.find({ $or: [query] });
         console.log("data yhaa tk aya");
       
      
       res.status(200).json(customers);
      
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getCustomers };
