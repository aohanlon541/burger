var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
<<<<<<< HEAD
    burger.all(function(data) {
        var burgObject = {
            burgers: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/", function(req, res) {
    burger.insert([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
=======
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
>>>>>>> 3b087e847a549afef519f223ad8d5330de79e653
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: true
    }, condition, function() {
        res.redirect("/");
    });
});


module.exports = router;