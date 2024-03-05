'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function check() {
  const guess = Number(document.querySelector('.guess').value); //because the return value is a string and we have to compare it with numbers

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('.number').textContent = number; //to manipulate the value from an input field
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? '📈Too High' : '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
}
document.querySelector('.guess').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    check();
  }
});
document.querySelector('.check').addEventListener('click', check);

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
