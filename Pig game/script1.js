'use strict';
// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;
//Starting coditions

const init = function () {
  diceEL.classList.add('hidden');
  playing = true;
  score0EL.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1El.textContent = 0;
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
};
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
}
//Roling Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generate random
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    //Check roll 1
    if (dice !== 1) {
      //add score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check score
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
