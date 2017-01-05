//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const qs = require('querystring');

let app = express();
let buzzWords = [];

app.use((req, res, next) => {
  console.log("first request");
  next();
});

app.use(bodyParser.urlencoded());

app.post('/buzzword', (req, res, next) => {
  buzzWords.push(req.body);
  console.log(`added ${req.body} to buzzWords array`);
  res.json({"success": true});
  next();
});

app.put('/buzzword', (req, res, next) => {
  let newWord = req.body;
  for(let i = 0; i < buzzWords.length; i++){
    if(buzzWords[i].buzzWord === newWord.buzzWord){
      buzzWords[i].buzzWord = newWord.buzzWord;
      buzzWords[i].points = newWord.points;
      buzzWords[i].heard = true;
    }
  }
  res.json({"success": true, newScore: newWord.points});
});

app.get('/', (req, res, next) => {
  // fs.readFile('./public/index.html', (err, content) => {
  //   if(err){
  //     throw "Error";
  //   }
    console.log('getting index.html...');
    res.sendFile(__dirname + '/public/index.html');  // });
});

app.get('/buzzwords', (req, res, next) => {
  console.log('sending buzzWords content to client');
  res.json({"buzzWords": buzzWords});
});

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('server listening on port 3000');
});