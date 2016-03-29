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
    var winner = createElementAndClass("div", 'winner-message', 'Начините игру');
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
    id.appendChild(field);    
    id.appendChild(winner);
});

/*
<button class="startNewGame">Начать новую игру</button>
<div class="winner-message"></div>
<div class="field">
    <div class="row">
        <div class="cell x"></div><div class="cell o"></div><div class="cell x"></div>
    </div>
    <div class="row">
        <div class="cell o"></div><div class="cell x"></div><div class="cell o"></div>
    </div>
    <div class="row">
        <div class="cell x"></div><div class="cell o"></div><div class="cell x"></div>
    </div>
</div>
*/