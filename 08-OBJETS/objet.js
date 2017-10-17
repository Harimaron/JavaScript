/* Exo 1 */
function randomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
  
var character = {
	name: 'Premiere',
  age: 14,
  itemsToGive: ["Sword", "Shield", "Helmet", "Armor"],
  giveItem: function() {
  	return this.itemsToGive[randomNumberBetween(0, this.itemsToGive.length -1)];
  },
};

for(var key in character) {
	var value = character[key];
  if (key === 'itemsToGive') value = value.join(', ');
  else if (key === 'giveItem') value = character.giveItem();
  console.log(key + ': ' + value);
}

/* Exo 2 */
function showItems() {
    //console.log(JSON.stringify(itemsToSell));
    itemsToSell.forEach(function(item) {
        console.log(item.title);
    });
  }
  
  function showAvailableItems() {
    itemsToSell.forEach(function(item) {
        if (item.available) console.log(item.title);
    });
  }
  
  function showHighLevelItems() {
    itemsToSell.forEach(function(item) {
        if (item.minLevel >= 10) console.log(item.title);
    });
  }
  
  var itemsToSell = [{
    title: 'Épée',
    physic: 12,
    magic: 8,
    minLevel: 5,
    available: true,
  }, {
    title: 'Hache',
    physic: 30,
    magic: 0,
    minLevel: 10,
    available: false,
  }, {
    title: 'Sceptre',
    physic: 0,
    magic: 20,
    minLevel: 5,
    available: true,
  }];
  
  //showItems();
  //showAvailableItems();
  showHighLevelItems();
  
  /* Exo 3 */

  var mainCharacter = {
    name: 'Bertrand',
    level: 12,
    life: 5,
    weapon: {
      name: "float",
      damage: 0,
    },
    attack: function() {
      return this.name + " attaque avec l'arme " + this.weapon.name + " les dégâts sont " + (this.level * this.weapon.damage);
    },
  };
  console.log(mainCharacter.attack());