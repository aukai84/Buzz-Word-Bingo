//jshint esversion: 6
const express = require('express');
//const bodyParser = require('body-parser');

let app = express();
let buzzWords = ['array of buzz words'];

app.use((req, res, next) => {
  console.log("first request");
  next();
});

//app.use(bodyParser);

// app.post('/buzzword', (req, res, next) => {
//   buzzWords.push(req.body);
//   res.json({"success": true});
//   next();
// });

app.get('/', (req, res, next) => {
  fs.readFile('./public/index.html', (err, content) => {
    if(err) throw err;
    res.send(content);
  });
});

app.get('/buzzwords', (req, res, next) => {
  res.json(buzzWords);
});

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('server listening on port 3000');
});