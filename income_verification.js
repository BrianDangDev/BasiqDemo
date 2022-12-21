var axios = require("axios");
var express = require("express");
var app = express();
var express = require("express");
// add user ID here 
var userId = '';

// add access token
var AccessToken = '';


// this program will return the summary of user income for the last 12 months and list of transaction labled as income 
app.get('/api/create/userId/income', function(req, res){
const options = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AccessToken} `
  }
};

axios.post(`https://au-api.basiq.io/users/${userId}/income`, {}, options)
 
.then(function (response) {
    res.send(response.data);
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

})

app.listen(3000, function(){
    console.log("Server is running");
})