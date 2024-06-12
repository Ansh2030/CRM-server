const express = require('express');
const router = express.Router();
const { getCustomers } = require('../Controllers/customerController');

router.post('/query', getCustomers);

module.exports = router;
