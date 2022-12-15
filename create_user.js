// access token you got from the authentication 
var AccessToken1=' ';
// after you receive user ID store it in userId
var userId = '';
var axios = require('axios');
 
var data = JSON.stringify({
  "email": "your email ",
  "mobile": "your phone number"
});

var config = {
  method: 'post',
  url: 'https://au-api.basiq.io/users',
  headers: { 
    'Authorization': `Bearer ${AccessToken1}`, 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});