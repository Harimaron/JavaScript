
document.body.classList.remove('bg-aqua');
document.body.classList.add('bg-olive');
document.getElementById("first-paragraph").classList.remove('bg-lime', 'gray');
document.getElementById("first-paragraph").classList.add('aqua');
document.querySelectorAll('.bg-silver').forEach((element) => {
    element.classList.add('bg-teal');
    element.classList.remove('bg-silver');
});
