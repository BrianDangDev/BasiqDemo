var axios = require('axios');
var express = require('express');
var app = express();
var qs = require('qs');
// store API key here for testing purpose only suppose to store api key in env file
var AuthCode = '';
app.get('/api', function(req, res){
  res.send("test path")
})
 
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
 
  console.log(response.data)
})
  .catch((error) => {
  console.log(error)
})
  