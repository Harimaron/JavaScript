var character = document.getElementById("character");
window.addEventListener('keydown', (event) => {
    var keyCode = event.keyCode;
    if (keyCode === 96 || keyCode === 48) character.style.backgroundColor = '#000000';
    else if (keyCode === 97 || keyCode === 49) character.style.backgroundColor = '#111111';
    else if (keyCode === 98 || keyCode === 50) character.style.backgroundColor = '#222222';
    else if (keyCode === 99 || keyCode === 51) character.style.backgroundColor = '#333333';
    else if (keyCode === 100 || keyCode === 52) character.style.backgroundColor = '#444';
    else if (keyCode === 101 || keyCode === 53) character.style.backgroundColor = '#555';
    else if (keyCode === 102 || keyCode === 54) character.style.backgroundColor = '#666';
    else if (keyCode === 103 || keyCode === 55) character.style.backgroundColor = '#777';
    else if (keyCode === 104 || keyCode === 56) character.style.backgroundColor = '#888';
    else if (keyCode === 105 || keyCode === 57) character.style.backgroundColor = '#999';
});

var up = document.getElementById("up");
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right");
window.addEventListener('keydown', (event) => {
    var keyCode = event.keyCode;
    if (keyCode === 38) up.classList.add('highlight');
    if (keyCode === 40) down.classList.add('highlight');
    if (keyCode === 37) left.classList.add('highlight');
    if (keyCode === 39) right.classList.add('highlight');
});

window.addEventListener('keyup', (event) => {
    var keyCode = event.keyCode;
    if (keyCode === 38) up.classList.remove('highlight');
    if (keyCode === 40) down.classList.remove('highlight');
    if (keyCode === 37) left.classList.remove('highlight');
    if (keyCode === 39) right.classList.remove('highlight');
});