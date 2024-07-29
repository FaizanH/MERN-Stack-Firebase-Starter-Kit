const router = require("express").Router();
let Data = require("../models/data.model");

// Get data
router.route("/").get((req, res) => {
  Data.find()
    .then(datalines => res.json(datalines))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
