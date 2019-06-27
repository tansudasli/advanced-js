let dragon = {
    name: 'dago',
    fire: true,

    fight() {
        return 5;
    },

    sing() {
        return `I am the ${this.name} of fire `
    }

};

let lizard = {
    name: 'kiki',

    fight() {
        return 1;
    }
};

lizard.__proto__ = dragon;
console.log(lizard.sing());  //came from dragon !
console.log(lizard.fire); //came from dragon !
console.log(lizard.fight()); //came from lizzard

console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));