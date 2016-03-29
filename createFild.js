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
    var startGame = createElementAndClass('div', 'startGame');
    var input = createElementAndClass("input", 'count');
    var errorMessage = createElementAndClass('div', 'error-message');
    var generateField = createElementAndClass('button', 'generateField', 'Создать поле');
    var p = createElementAndClass('p', 'someclass');
    var mainGame = createElementAndClass('div', 'mainGame');
    var startNewGame = createElementAndClass('button', 'startNewGame', 'Начать новую игру');
    var winner = createElementAndClass("div", 'winner-message');
    var field = createElementAndClass('div', 'field');
    p.appendChild(input);
    var start = id.appendChild(startGame);
    var main = id.appendChild(mainGame);
    start.appendChild(p);
    start.appendChild(errorMessage);
    start.appendChild(generateField);
    main.appendChild(startNewGame);
    main.appendChild(winner);
    main.appendChild(field);
    console.log(id);
});

/*
<!--<div class="startGame">
    <p>Введите размер поля <input class="count"></p>
    <div class="error-message"></div>
    <button class="generateField">Создать поле</button>
</div>
<div class="mainGame">
    <button class="startNewGame">Начать новую игру</button>
    <div class="winner-message"></div>
    <div class="field">
    </div>
</div>-->
*/