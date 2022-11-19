'use strict';

let myScore = document.querySelector('.score').textContent;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let myHighscore = document.querySelector('.highscore').textContent;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function checkorino(myScore) {
  if (myScore > 0) {
    document.querySelector('.score').textContent = myScore;
  } else {
    document.querySelector('.message').textContent = '⚠ You lose! ⚠';
    document.querySelector('body').style.backgroundColor = '#Ff0000';
    document.querySelector('.score').textContent = '0';
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('💥 Please insert a number!');
  } else if (guess === secretNumber) {
    displayMessage('🎆 Correct Number!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (myScore > myHighscore) myHighscore = myScore;
    document.querySelector('.highscore').textContent = myHighscore;
  } else if (guess !== secretNumber) {
    if (myScore > 1) {
      displayMessage(
        guess > secretNumber
          ? 'The secret number is lower!'
          : 'The secret number is higher!'
      );
      myScore--;
      document.querySelector('.score').textContent = myScore;
    } else {
      displayMessage('⚠ You lose! ⚠');
      document.querySelector('body').style.backgroundColor = '#Ff0000';
      document.querySelector('.score').textContent = '0';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  myScore = 20;
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage(' Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
