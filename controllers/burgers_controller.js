var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function (req, res) {
  burger.insertOne(req.body.name), function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.json({ id: result.insertId });
    };
  };
});

router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    console.log(result);
    res.redirect('/');
  });
});



// Export routes for server.js to use.
module.exports = router;
