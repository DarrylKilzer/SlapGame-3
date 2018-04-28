// Version:1

// creates Target details: uses a constructor to setup all the targets attrubutes.
var endTarget = new Target('Wacky', 100)

//list of items that can be used to "enhance" attacks
var items = {
    shield: new Item('Shield', 0.3, "This is an awesome shield!"),
    fist: new Item('fist of thunder', 10, 'will give +10 damage'),
    rock: new Item('Rock', 3, 'just a simple but hard rock')
}

// function for the first "type of attack" button: initially "slap"
// also updates the health and the hit totals
function slap() {
    endTarget.health -= (addMods() + 1)
    //console.log(addMods() + 1)
    endTarget.hits += 1
    update()
}

// function for the first "type of attack" button: initially "punch"
// also updates the health and the hit totals
function punch() {
    addMods()
    endTarget.health -= (addMods() + 5)
    //console.log((addMods()) + 5)
    endTarget.hits += 1
    update()
}

// function for the third "type of attack" button: initially "kick"
// also updates the health and the hit totals
function kick() {
    endTarget.health -= (addMods() + 10)
    //console.log(addMods() + 10)
    endTarget.hits += 1
    update()
}


//function to update the health info on web page.
function update() {
    document.getElementById('healthNum').innerText = endTarget.health
    document.getElementById('hithNum').innerText = endTarget.hits
    document.getElementById('nameID').innerText = endTarget.name
}

// function to add items to be used to modify attack numbers.
//var shield = ''
function giveItemToTarget(atItem) {
   endTarget.items.push(items[atItem])
   
    
}

// function to total up the attack modifiers
function addMods() {
    var modTotal = 0
 //   debugger
    for (let i = 0; i < endTarget.items.length; i++) {
        let mod = endTarget.items[i];
        modTotal += mod.modifier

    }
    return modTotal

}

//Constructs
function Target(name, health) {
    this.name = name;
    this.health = health;
    this.hits = 0;
    this.items = []
}

function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}


update()