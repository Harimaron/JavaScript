document.querySelectorAll('.hoverMe').forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.color = 'white';
    });
});

document.querySelectorAll('.hoverMe').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.style.color = 'black';

    })
});
