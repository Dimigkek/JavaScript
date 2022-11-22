'use strict';
const diceEl = document.querySelector('.dice');
let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.querySelector('#score--1');
let turn = document.querySelector('.player--active');
let active1 = document.querySelector('.player--0');
let active2 = document.querySelector('.player--1');
let scorePLayer1 = 0;
let scorePLayer2 = 0;
let playerTurn = 0;
let holdPlayer1 = document.querySelector('#current--0');
let holdPlayer2 = document.querySelector('#current--1');
let hold = 0;

function swapToOne() {
  active2.classList.remove('player--active');
  active1.classList.add('player--active');
  hold = 0;
}
function swapToTwo() {
  active1.classList.remove('player--active');
  active2.classList.add('player--active');
  hold = 0;
}
/* roll event*/
document.querySelector('.btn--roll').addEventListener('click', function () {
  diceEl.classList.add('dice');
  const rollDice = Math.trunc(Math.random() * 6 + 1);
  diceEl.src = `dice-${rollDice}.png`;
  if (playerTurn == 0) {
    scorePLayer1 += rollDice;
    scorePlayer1.textContent = scorePLayer1;
    if (scorePLayer1 >= 100) alert(`PLayer1 win!!`);
    if (rollDice == 1) {
      scorePLayer1 = 0;
      scorePlayer1.textContent = 0;
      holdPlayer1.textContent = 0;
      playerTurn = 1;
      swapToTwo();
    }
  } else {
    scorePLayer2 += rollDice;
    scorePlayer2.textContent = scorePLayer2;
    if (scorePLayer2 >= 100) alert(`PLayer2 win!!`);
    if (rollDice == 1) {
      scorePLayer2 = 0;
      scorePlayer2.textContent = 0;
      holdPlayer2.textContent = 0;
      playerTurn = 0;
      swapToOne();
    }
  }
});
/* Reset game*/
document.querySelector('.btn--new').addEventListener('click', function () {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  scorePLayer1 = 0;
  scorePLayer2 = 0;
  diceEl.classList.remove('dice');
  diceEl.src = '';
  swapToOne();
});
/*hold button */
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playerTurn == 0) {
    hold += scorePLayer1;
    holdPlayer1.textContent = hold;
    playerTurn = 1;
    swapToTwo();
  } else {
    hold += scorePLayer2;
    holdPlayer2.textContent = hold;
    playerTurn = 0;
    swapToOne();
  }
});
