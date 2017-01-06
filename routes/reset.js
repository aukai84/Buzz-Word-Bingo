//jshint esversion: 6

const express = require('express');
const game = require('./../game.js');
let router = express('router');

router.post('/', (req, res, next) => {
   game.buzzWords = [];
  res.json({success: true});
});

module.exports = router;