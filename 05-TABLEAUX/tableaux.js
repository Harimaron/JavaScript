var sum = 0;
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < myArray.length; i++) {
	var value = myArray[i];
  sum = sum + value;
	console.log(sum);
}


var myArray = ["Brad Pitt", "Jackie Chan", "Jet Li"];
for (var i = 0; i < myArray.length; i++) {
  var actor = myArray[i];
  console.log("Le numéro " + (i + 1) + " est " + actor);
  

}

var myArrayTwo = ["premier", "deuxième", "troisième"];
var myArray = ["Brad Pitt", "Jackie Chan", "Jet Li"];
for (var i = 0; i < myArray.length; i++) {
  var actor = myArray[i];
  var number = myArrayTwo[i];
  console.log("Le " + number + " est " + actor);
  

}

var myArray = ["Mario", "Luigi", "Peach"];
var myArray2 = [...myArray, 'Bowser'];
console.log(myArray);
console.log(myArray2);

var myArray = ["Mario", "Luigi", "Peach"];
var myArray2 = [];
for (var i = 0; i < myArray.length; i++) {
  var value = myArray[i];
  myArray2.push(value);
}
myArray2.push('Bowser');
console.log(myArray);
console.log(myArray2);