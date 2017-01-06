//jshint esversion: 6
const express = require('express');
const game = require('./../game.js');
let buzzWords = game.buzzWords;
let router = express('router');

router.get('/', (req, res, next) => {
  console.log('sending buzzWords content to client');
  res.json({"buzzWords": buzzWords});
});

module.exports = router;