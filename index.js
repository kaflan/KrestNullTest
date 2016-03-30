window.addEventListener('load', function load() {
    var id = document.getElementById('myGame');
    function createElementAndClass(elem, cls, text) {
        var el = document.createElement(elem);
        if(text){
            el.textContent = text;
        }
        el.classList.add(cls);
        return el;
    }
    var size = 3;
    var startNewGame = createElementAndClass('button', 'startNewGame', 'Начать новую игру');
    var winner = createElementAndClass("div", 'winner-message', 'Нажмите "Начать новую игру" для игры');
    var field = createElementAndClass('div', 'field');
    var row, cell;
    for(var i = 0; i < size; i++){
        row = createElementAndClass('div', 'row');
        field.appendChild(row);
        for(var j = 0; j < size; j++){
           cell = createElementAndClass('div','cell');
           row.appendChild(cell); 
        }
    }
    id.appendChild(startNewGame);
    id.appendChild(winner);
    id.appendChild(field);    
});
function getWinner() {
    var cellsD = document.querySelectorAll('.cell');
    var cells = [[], [], []];
    var i;
    for (i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var el = cellsD[i * 3 + j];
            if (el.classList.contains('x')) {
                cells[i][j] = 'x';
            }
            if (el.classList.contains('o')) {
                cells[i][j] = 'o';
            }
        }
    }

    if (
        ((cells[0][0] === cells[1][1]) && (cells[1][1] === cells[2][2])) ||
        ((cells[2][0] === cells[1][1]) && (cells[1][1] === cells[0][2]))
    ) {
        return cells[1][1];
    }

    for (i = 0; i < 2; i++) {
        if ((cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i])) {
            return cells[0][i];
        }
        if ((cells[i][0] === cells[i][1]) && (cells[i][1] === cells[i][2])) {
            return cells[i][0];
        }
    }
    console.log('I m on line');

}
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