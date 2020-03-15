var express = require("express");
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
var db;

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) return console.log(err);
  db = client.db("apti");
});

/* GET home page. */
router.get("/", function(req, res, next) {
  db.collection("aantalOnline")
    .find({}, {projection: {aantal: 1}})
    .toArray((err, data) => {
      if (err) throw err;
      res.json(data);
    });
});

module.exports = router;
