'use strict';
import * as md from './modules.js';

const randomNumber = md.getRandomIntInclusive(1, 20);

sessionStorage.setItem('score', 5);
const highScore = Number(md.getCookie('high'));
document.querySelector('.highscore').innerHTML = highScore;

//EVENTS
//CHECK BUTTON
document.querySelector('.check').addEventListener('click', () => {
  const inGuess = document.querySelector('.guess').value;
  const guess = Number(inGuess);
  const score = Number(sessionStorage.getItem('score'));

  if (!guess || guess < 0 || guess > 20) {
    md.displayMessage('INVALID VALUE');
    return;
  } else if (score === 1) {
    md.displayMessage('YOU LOSE!!');
    md.changeStyle('wrap-red');
    document.querySelector('.number').innerHTML = randomNumber;
    document.querySelector('.score').innerHTML = 0;
    return;
  }
  if (guess !== randomNumber) {
    md.displayMessage(md.isGreaterOrLesser(guess, randomNumber));
    const newScore = md.changeScore(score);
    sessionStorage.setItem('score', newScore);
    return;
  }

  md.displayMessage('YOU WIN!!');
  md.changeStyle('wrap-green');
  document.querySelector('.number').innerHTML = randomNumber;
  md.checkHighScore(highScore, score);
});

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
