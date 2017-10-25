
/*JEUX-DU-PENDU*/

function guessLetter() {
  var textTyped = window.prompt('Enter a letter here')[0];
  for (var i = 0; i < word.length; i = i + 1) {
    var letter = word[i];
    if (letter.toLowerCase() === textTyped.toLowerCase()) wordGuessed[i] = letter;
  }
  alert(wordGuessed.join(' '));
  if (wordGuessed.indexOf("_") === -1) alert("Congratulations!");
  else guessLetter();
}
var word = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
var wordGuessed = ['_', '_', '_', '_', '_', '_', '_'];
guessLetter();


// J'initialise ma fonction.
function devineLaLettre() {
  // Variable créée qui a pour but de demander une lettre.
  var textEcrit = window.prompt('Entrez une lettre ici')[0];
  // Je créé une boucle qui continuera tant que le mot ne sera pas trouvé.
  for (var i = 0; i < mot.length; i = i + 1) {
    // Je créé une viarable pour toutes les lettres du mot.
    var lettre = mot[i];
    // Je lui dit que peu importe si la lettre est en minuscule ou en majuscule.
    if (lettre.toLowerCase() === textEcrit.toLowerCase()) motDevine[i] = lettre;
  }
  // 
  alert(motDevine.join(' '));
  // J'arrête ma boucle si il n'y a plus de caractères à trouver.
  if (motDevine.indexOf('_') === -1) alert('Bravo !');
  // Autrement : Je continue ma boucle.
  else devineLaLettre();
}
// J'écris le contenu de mes variables.
var mot = ['E', 'N', 'T', 'R', 'A', 'I', 'N', 'E', 'M', 'E', 'N', 'T'];
var motDevine = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
// J'appelle ma fonction.
devineLaLettre();

