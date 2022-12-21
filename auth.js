var axios = require('axios');
var express = require('express');
var app = express();
var qs = require('qs');
 

// store here for testing purpose only suppose to store api key in env file
// First step you need to get a API key and add store it in AuthCode variable
// After that run the program and you will receive a access token 
var AuthCode = '';

// Store the access token to AccessToken variable
// now we move to the create user part
var AccessToken = '';


// Store your user ID here 
var userId = '';

// Get access token 
app.get('/api', function(req, res){
var data = qs.stringify({
  'scope': 'SERVER_ACCESS' 
})

var config = {
  method: 'post',
  url: 'https://au-api.basiq.io/token',
  headers: { 
    'Authorization': `Basic ${AuthCode}`, 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'basiq-version': '3.0'
  },
  data : data
};

axios(config)
  .then((response) => {
 res.send(response.data);
  console.log(response.data)
})
  .catch((error) => {
  console.log(error)
})})

// Create user
// Add your email, phone number and run this program again (remmeber to change your port)
// if it compile successfully, the server will response with user ID and you also able to see it on Basiq dashboad (remember to store it to userId variable)
// after succesfully create user, in order to read user financial data, user must consent to Basiq terms and services via Basiq Consent UI(You can generate the consent form directly on Basiq dashboad )
app.get('/api/create', function(req,res){
var data = JSON.stringify({
  "email": "ENTER YOUR EMAIL HERE",
  "mobile": "ENTER YOUR PHONE NUMBER"
});

var config = {
  method: 'post',
  url: 'https://au-api.basiq.io/users',
  headers: { 
    'Authorization': `Bearer ${AccessToken}`, 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
.then(function (response) {
  res.send(response.data);
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
})


// After user consented to Basiq terms and service you will be abled to excecute this part 
// the return data will be list of financial data

app.get('/api/create/userId', function(req,res){
var config = {
  method: 'get',
  url: `https://au-api.basiq.io/users/${userId}/accounts`,
  headers: { 
    'Authorization': `Bearer ${AccessToken}`, 
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

})


 

  
app.listen(3000, function(){
  console.log("server is running");
})