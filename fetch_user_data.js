var axios = require('axios');
var express = require('express');
var app = express();
// add userId 
var userId = '';

//add access token
var AccessToken1=' ';


// app.get('/api/token/user', function(req,res){
var config = {
  method: 'get',
  url: `https://au-api.basiq.io/users/${userId}/accounts`,
  headers: { 
    'Authorization': `Bearer ${AccessToken1}`, 
    'Accept': 'application/json'
  }
};

axios(config)
.then(function (response) {
    res.send(response.data);
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
// })

// app.listen(3000, function(){
//     console.log("server is running");
// })