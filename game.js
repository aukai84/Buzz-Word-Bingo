//jshint esversion: 6

let buzzWords = [];
let userScore = 0;

function reset() {
  buzzWords = [];
  userScore = 0;
}
module.exports = {
  buzzWords: buzzWords,
  userScore: userScore,
  reset: reset
};