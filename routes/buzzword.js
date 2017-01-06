//jshint esversion: 6
const express = require('express');
const game = require('./../game.js');
let buzzWords = game.buzzWords;
let userScore = game.userScore;
let router = express('router');

router.post('/', (req, res, next) => {
  if(req.body.hasOwnProperty('buzzWord')){
    buzzWords.push(req.body);
    console.log(`added ${req.body} to buzzWords array`);
    res.json({"success": true});
  } else {
    res.json({"success": false});
  }
});

router.put('/', (req, res, next) => {
  let newWord = req.body;
  for(let i = 0; i < buzzWords.length; i++){
    if(buzzWords[i].buzzWord === newWord.buzzWord){
      userScore += newWord.points;
      buzzWords[i].heard = true;
    }
  }
  res.json({"success": true, newScore: newWord.points});
});

router.delete('/', (req, res, next) => {
  let deletedWordName = req.body.buzzWord;
  for(let i = 0; i < game.buzzWords.length; i++){
    if(buzzWords[i].buzzWord === deletedWordName){
      buzzWords.splice(buzzWords.indexOf(buzzWords[i]), 1);
    }
  }
  res.json({success: true});
});

module.exports = router;
