"use strict";
//inject dependencies
const express = require("express");//express webserver
const redis = require("redis");
const getData = require("./getData");
var app = express();
const port = (typeof process.env.PORT !== "undefined" ? process.env.PORT : "3000");

const client = redis.createClient(process.env.REDIS_URL);
client.on("connect", () => {
  console.log("connect to redis");
});
client.on("error", err => {
  console.log(`Error: ${err}`);
});


app.get("/", (req, res) => {
  console.log(req.ip);
  res.setHeader("Content-Type", "application/json");//return header is json data
  client.get("root", (err, root) => {
    if (root) {
      res.send(root);
    } else {
      getData(function cb(data) {
        client.setex("root", 3600, JSON.stringify(data));
        res.send(JSON.stringify(data));
      });
    }
  });
});

app.get("/byRank/:from-:to", (req, res) => {
  console.log(req.ip);
  client.get(`byRank/${req.param("from")}-${req.param("to")}`, (err, byRank) => {
    if (byRank) {
      res.setHeader("Content-Type", "application/json");
      res.send(byRank);
    } else {
      getData(function cb(data) {
        let startNum = parseInt(req.param("from"));
        let endNum = parseInt(req.param("to"));
        if (isNaN(startNum) && isNaN(endNum)) {
          client.setex(`byRank/${req.param("from")}-${req.param("to")}`, 3600, "Entered values aren't numbers. They must be.");
          res.status(404).send("Entered values aren't numbers. They must be.");
        } else {
          res.setHeader("Content-Type", "application/json");
          let splitData = data.slice(startNum - 1, endNum - 1);
          client.setex(`byRank/${req.param("from")}-${req.param("to")}`, 3600, JSON.stringify(splitData));
          res.send(JSON.stringify(splitData));
        }
      });
    }
  });
});

app.get("/byName/:name", (req, res) => {
  console.log(req.ip);
  client.get(`byName/${req.param("name")}`, (err, byName) => {
    if (byName) {
      res.setHeader("Content-Type", "application/json");
      res.send(byName);
    } else {
      getData(function cb(data) {
        if (data != []) {
          let player = data.findIndex((elem) => elem === req.param("name"));
          console.log(player);
          if (player === "undefined" && player == -1) {
            client.setex(`byName/${req.param("name")}`, 3600, `Can't find player ${req.param("name")}`);
            res.status(404).send(`Can't find player ${req.param("name")}`);
          } else {
            res.setHeader("Content-Type", "application/json");
            client.setex(`byName/${req.param("name")}`, 3600, player + 1);
            res.send(player + 1);
          }
        }
      });
    }
  });
});

app.listen(port, () => console.log("Serving on port " + port));
exports = module.exports = app;