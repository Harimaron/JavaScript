for (var i = 0; i <= 20; i = i + 1) {
    if (i % 2 !== 0) {
        console.log(i + ' est impaire');
    } else {
        console.log(i + ' est paire');
    }
}


for (var i = 0; i <= 10; i = i + 1) {
    console.log(i + ' * 9 = ' + i * 9);
}


for (var i = 0; i < 6; i++) {
    var text = '';
    for (var j = 0; j < i; j++) {
        text += '* ';
    }
    console.log(text);
}



function getGrade(score) {
    var grade = 'F';
    if (score > 65) grade = "D";
    if (score > 70) grade = "C";
    if (score > 80) grade = "B";
    if (score > 90) grade = "A";
    return grade
}
for (var i = 0; i < 100; i = i + 1) {
    console.log("Pour " + i + " points vous avez le grade " + getGrade(i) + ".");

}

getGrade(59);







