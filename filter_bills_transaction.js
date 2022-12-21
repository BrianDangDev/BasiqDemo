var axios = require("axios");
var express = require("express");
var app = express();
var express = require("express");
// Add user ID 
var userId = "";

// Add access token
var AccessToken ="";

//  this program will return list of transaction you can customize the return data by applying filter feature 
app.get("/api/create/userId/transactions", function (req, res) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${AccessToken}`,
    },
  };

  axios
    .get(
      `https://au-api.basiq.io/users/${userId}/transactions?limit=500`,
      options
    )
    .then(function (response) {
      const filteredData = response.data;

      console.log(filteredData);
      res.send(filteredData);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(3000, function () {
  console.log("Server is running");
});
