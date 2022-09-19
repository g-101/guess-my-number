'use strict';
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomNumber = getRandomIntInclusive(1, 20);

let highStorage = localStorage.setItem('high', '0');
let highScore = Number(localStorage.getItem('high'));
let scoreStorage = sessionStorage.setItem('score', '5');
let score = Number(sessionStorage.getItem('score'));

document.querySelector('.again').addEventListener('click', () => {
  location.reload();
});

document.querySelector('.check').addEventListener('click', () => {
  document.querySelector('.message').innerHTML = 'Start guessing...';
  const inGuess = document.querySelector('.guess').value;

  const guess = +inGuess;

  if (!guess) {
    document.querySelector('.message').innerHTML = 'NO Number';
    return;
  } else if (score <= 1) {
    document.querySelector('.number').innerHTML = '&#x1F625';
    document.querySelector('.score').innerHTML = 0;
    document.querySelector('body').style.backgroundColor = '#ff0000';
    document.querySelector('.message').innerHTML = 'YOU LOSE!!';
    document.querySelector('.again').style.visibility = 'visible';
    return;
  }

  if (guess > randomNumber) {
    document.querySelector('.message').innerHTML = 'TOO HIGH!';
    score--;
    document.querySelector('.score').innerHTML = score;
    scoreStorage = sessionStorage.setItem('score', toString(score));
    return;
  } else if (guess < randomNumber) {
    document.querySelector('.message').innerHTML = 'TOO LOW!';
    score--;
    document.querySelector('.score').innerHTML = score;
    scoreStorage = sessionStorage.setItem('score', toString(score));
    return;
  }
  document.querySelector('.number').innerHTML = randomNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.message').innerHTML = 'YOU WIN!!';
  document.querySelector('.number').style.width = '30rem';
  if (score > highScore) {
    highStorage = localStorage.setItem('high', toString(score));
    document.querySelector('.highscore').innerHTML = score;
  }
  document.querySelector('.again').style.visibility = 'visible';
  return;
});
