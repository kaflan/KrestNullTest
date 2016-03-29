/* global getWinner */
window.addEventListener('load', function load() {
  'use strict';
  var cellAll = document.querySelectorAll('.cell');
  var field = document.querySelector('.field');
  var nextClass;
  var winnerEl = document.querySelector('.winner-message');
  var i;
  var winner;
  var startNewGame = document.querySelector('.startNewGame');
  field.style.display = 'none';
  function clickEvent(event) {
    event.preventDefault();
    if ((event.target.classList.contains('x') || event.target.classList.contains('o')) || !event.target.classList.contains('cell') && event.target.classList.contains('field')) {
      return;
    }
    if (nextClass === 'x') {
      nextClass = 'o';
    } else {
      nextClass = 'x'; 
    }
    event.target.classList.add(nextClass);
    winner = getWinner();
    if (winner === 'x') {
      winnerEl.textContent = 'Крестик победил';
      field.removeEventListener('click', clickEvent);
    } else if (winner === 'o') {
      winnerEl.textContent = 'Нолик победил';
      field.removeEventListener('click', clickEvent);
    }
  }

  function clickNewGame(e) {
      field.style.display = "block";
    e.preventDefault();
    for (i = 0; i < cellAll.length; i++) {
      cellAll[i].classList.remove('o');
      cellAll[i].classList.remove('x');
      nextClass = '';
      winnerEl.textContent = '';
    }
    field.addEventListener('click', clickEvent);
  }

  startNewGame.addEventListener('click', clickNewGame);
});