document.querySelectorAll('.hoverMe').forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.opacity = 0;
    });
});

document.getElementById("reset").addEventListener('click', (event) => {
    document.querySelectorAll('.hoverMe').forEach((element) => {
        element.style.opacity = 1;
    });
});

var axeX = document.getElementById('axe-x');
var axeY = document.getElementById('axe-y');
window.addEventListener('mousemove', (event) => {
    axeX.textContent = event.clientX;
    axeY.textContent = event.clientY;
});