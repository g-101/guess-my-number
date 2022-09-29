export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const displayMessage = function (message) {
  document.querySelector('.message').innerHTML = message;
};

export function checkHighScore(highScore, score) {
  if (score > highScore) {
    setCookie('high', score);
    document.querySelector('.highscore').innerHTML = score;
  }
}
export function changeStyle(bgColor) {
  document.querySelector('.wrap').classList.remove('wrap-bg-black');
  document.querySelector('.wrap').classList.add(bgColor);
  document.querySelector('.again').classList.remove('hidden');
  document.querySelector('.check').classList.add('hidden');
}

export function changeScore(score) {
  score--;
  document.querySelector('.score').innerHTML = score;
  return score;
}

export function isGreaterOrLesser(guess, randomNumber) {
  return guess > randomNumber ? 'TOO HIGH!' : 'TOO LOW!';
}

export function setCookie(name, value) {
  const d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

export function getCookie(name) {
  var cname = name + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return '';
}
