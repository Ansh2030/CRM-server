const express = require("express");

const router = express.Router();

// Define a GET route

router.get("/", (req, res) => {

  res.send("publish rout");

});

module.exports = router;