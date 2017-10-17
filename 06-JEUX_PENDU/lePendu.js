
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

  
