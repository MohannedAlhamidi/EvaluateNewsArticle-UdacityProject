const path = require('path')
const express = require('express');
const app = express();
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser')
const requestPost = require('./handleRequest')
const cors = require('cors');


app.use(cors())
app.use(bodyParser.json())  // to use json

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.resolve('dist/index.html'));
    
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
// Post
app.post('/article', requestPost.validateInputRequest, requestPost.PostHandler);

module.exports = app;

