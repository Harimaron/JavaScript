function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// exécute la requete data.json
fetch('data.json')
  // convertit la réponse en objet javascript (json) 
  .then((response) => response.json())
  // exécute le code
  .then((json) => {
    console.log("affiche le contenu du json", json);
    // crée un NOUVEAU tableau avec le contenu du tableau json
    let arr = [...json];
    // pour chaque personne rajoute une propriété score avec un chiffre aléatoire entre 0 et 1000
    arr = arr.map((person) => ({
      // copie les propriétés de person dans un nouvel objet
      ...person,
      // rajoute la propriété score en plus
      score: randomNumberBetween(0, 1000),
    }));
    console.log("après avoir rajouté le score", arr);
    // compare le score de A et le score de B 
    arr.sort((personA, personB) => personA.score > personB.score);
    console.log("trie le score par ordre croissant", arr);
    // initialise les tableaux
    const a = [];
    const b = [];
    const c = [];
    // pour chaque personne dans le tableau
    arr.forEach((person) => {
      // récupère le score de la personne
      const score = person.score;
      // si le score > 750 ajoute au tableau a
      if (score > 750) a.push(person);
      // sinon si le score > 500 ajoute au tableau b
      else if (score > 500) b.push(person);
      // sinon si le score >= 500 ajoute au tableau c
      else if (score <= 500) c.push(person);
    });
    console.log("tri par catégorie", a, b, c);
    // récupère un nouveau tableau avec uniquement les personnes dont country = bahrain puis récupère la longueur de ce tableau
    const count = arr.filter((person) => person.country === 'Bahrain').length;
    console.log("nombre d'habitants au Bahrain", count);
    // comme le tableau est déjà trié par score, récupère la dernière valeur du tableau
    console.log("plus grand score", arr[arr.length - 1]);
    // comme le tableau est déjà trié par score, récupère la première valeur du tableau
    console.log("plus petit score", arr[0]);
  });



