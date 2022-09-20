'use strict';
import * as md from './modules.js';

const randomNumber = md.getRandomIntInclusive(1, 20);
localStorage.setItem('high', 0);
sessionStorage.setItem('score', 5);

//EVENTS
//CHECK BUTTON
document.querySelector('.check').addEventListener('click', () => {
  const inGuess = document.querySelector('.guess').value;
  const guess = Number(inGuess);
  const score = Number(sessionStorage.getItem('score'));

  const highScore = localStorage.getItem('high');

  if (!guess || guess < 0 || guess > 20) {
    md.displayMessage('INVALID VALUE');
    return;
  } else if (md.continueGame(score, guess, randomNumber)) {
    if (score > highScore) {
      localStorage.setItem('high', score);
      document.querySelector('.highscore').innerHTML = score;
    }
    return;
  }
  md.displayMessage(md.isGreaterOrLesser(guess, randomNumber));
  const newScore = md.changeScore(score);
  console.log(newScore);
  sessionStorage.setItem('score', newScore);
});

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
