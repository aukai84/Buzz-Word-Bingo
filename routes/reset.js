//jshint esversion: 6

const express = require('express');
const game = require('./../game.js');
let router = express('router');

router.post('/', (req, res) => {
  console.log('clearing game');
  game.buzzWords = [];
  game.userScore = 0;
  res.json({success: true});
});

module.exports = router;