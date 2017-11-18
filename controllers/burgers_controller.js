const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    let burgerList = {
      burgers: data
    }
    res.render("index", burgerList)
  })
})

router.post("/api/burgers", function (req, res) {
  console.log("router" + req.body.name)
  burger.create (req.body.name)
});

router.put("/api/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    res.status(200).send
  })
})

module.exports = router;
