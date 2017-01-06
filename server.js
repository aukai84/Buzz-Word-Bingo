//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const buzzwords = require('./routes/buzzwords');
const buzzword = require('./routes/buzzword');
const reset = require('./routes/reset');
const  app = express();
//PORT=4000 node server.js
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use('/buzzwords', buzzwords);
app.use('/buzzword', buzzword);
app.use('/reset', reset);

app.use((req, res, next) => {
  console.log("first request");
  next();
});

app.get('/', (req, res, next) => {
    console.log('getting index.html...');
    res.sendFile(__dirname + '/public/index.html');
});

let server = app.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('server listening on port 3000');
});