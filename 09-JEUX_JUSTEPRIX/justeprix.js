let essais = 0;
const valMin = 20;
const valMax = 80;
function valAleatoire() {
    return (Math.floor(Math.random() * (valMax - valMin)) + valMin);
}
const resultat = valAleatoire();

function main() {
    const valPicked = window.prompt('Found the number between 20 and 80.');
    if (+valPicked === resultat) {
        reussite();
    }
    else if (valPicked > resultat) {
        window.alert("It's less.");
        essais++;
        main();
    }
    else if (valPicked < resultat) {
        window.alert("It's more.");
        essais++;
        main();
    }

    function reussite() {
        window.alert("Tu as réussi en " + essais + " essais !");
    }
}
main();
