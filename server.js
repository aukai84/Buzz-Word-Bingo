//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const buzzwords = require('./routes/buzzwords');

let app = express();

app.use(bodyParser.urlencoded());
app.use('/buzzwords', buzzwords);

app.use((req, res, next) => {
  console.log("first request");
  next();
});

app.post('/buzzword', (req, res, next) => {
  if(req.body.hasOwnProperty('buzzWord')){
    buzzWords.push(req.body);
    console.log(`added ${req.body} to buzzWords array`);
    res.json({"success": true});
  } else {

  }
});

app.post('/reset', (req, res, next) => {
   buzzWords = [];
  res.json({success: true});
});

app.put('/buzzword', (req, res, next) => {
  let newWord = req.body;
  for(let i = 0; i < buzzWords.length; i++){
    if(buzzWords[i].buzzWord === newWord.buzzWord){
      buzzWords[i].points = newWord.points;
      buzzWords[i].heard = true;
    }
  }
  res.json({"success": true, newScore: newWord.points});
});

app.delete('/buzzword', (req, res, next) => {
  let deletedWordName = req.body.buzzWord;
  for(let i = 0; i < buzzWords.length; i++){
    if(buzzWords[i].buzzWord === deletedWordName){
      buzzWords.splice(buzzWords.indexOf(buzzWords[i]), 1);
    }
  }
  res.json({success: true});
});

app.get('/', (req, res, next) => {
    console.log('getting index.html...');
    res.sendFile(__dirname + '/public/index.html');
});

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('server listening on port 3000');
});