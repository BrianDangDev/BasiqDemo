const express = require("express");
const axios = require("axios");
const qs = require("qs");
var router = express.Router();
const app = express();

app.get("/ping", (req, res) => {
   res.send("Ping")
  });

app.get("/api/token", (req, res) => {
  var data = qs.stringify({
    scope: "SERVER_ACCESS",
  });

  var config = {
    method: "post",
    url: "https://au-api.basiq.io/token",
    headers: {
      "Authorization": `Basic ${process.env.BASIQ_KEY}`,
      "Content-Type": 'application/x-www-form-urlencoded',
      "basiq-version": '3.0',
    },
    data: {
      scope: "SERVER_ACCESS",
    },
  };

  axios(config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
  console.log()
});

 