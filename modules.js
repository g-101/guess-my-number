export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const displayMessage = message => {
  document.querySelector('.message').innerHTML = message;
};

const changeStyle = (randomNumber, bgColor, message, callDisplayMessage = displayMessage) => {
  document.querySelector('.number').innerHTML = randomNumber;
  document.querySelector('body').style.backgroundColor = bgColor;
  document.querySelector('.again').style.visibility = 'visible';
  callDisplayMessage(message);
};

export function continueGame(score, guess, randomNumber, callChangeStyle = changeStyle) {
  let out = false;

  if (score <= 1) {
    document.querySelector('.score').innerHTML = 0;
    callChangeStyle(randomNumber, '#ff0000', 'YOU LOSE!!');
    out = true;
  } else if (guess === randomNumber) {
    document.querySelector('.number').style.width = '30rem';
    callChangeStyle(randomNumber, '#60b347', 'YOU WIN!!');
    out = true;
  }
  return out;
}

export function changeScore(score) {
  score--;
  document.querySelector('.score').innerHTML = score;
  return score;
}

export function isGreaterOrLesser(guess, randomNumber) {
  return guess > randomNumber ? 'TOO HIGH!' : 'TOO LOW!';
}
