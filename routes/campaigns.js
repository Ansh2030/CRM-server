

const express = require('express');
const router = express.Router();
const { sendCampaign } = require('../Controllers/campaignController');
const {getData} = require('../Controllers/getCamp')
router.post('/send', sendCampaign);

router.get('/', getData );

module.exports = router;


