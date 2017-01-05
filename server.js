//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const qs = require('querystring');

let app = express();
let buzzWords = [];
let buzzWordNames = [];

app.use((req, res, next) => {
  console.log("first request");
  next();
});

app.use(bodyParser.urlencoded());

app.post('/buzzword', (req, res, next) => {
  buzzWords.push(req.body);
  buzzWordNames.push(req.body.buzzWord);
  res.json({"success": true});
  next();
});

app.put('buzzword', (req, res, next) => {
  if(buzzWordNames.indexOf(body.req.buzzWord) > -1){

  }
});

app.get('/', (req, res, next) => {
  fs.readFile('./public/index.html', (err, content) => {
    if(err){
      throw "Error";
    }
    res.send(content);
  });
});

app.get('/buzzwords', (req, res, next) => {
  res.json({"buzzWords": buzzWords,
"buzzWordNames": buzzWordNames});
});

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('server listening on port 3000');
});