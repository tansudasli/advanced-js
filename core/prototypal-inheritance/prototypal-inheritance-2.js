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
    fire: false,

    fight() {
        return 1;
    }
};

const s = dragon.sing();

console.log(s);

const singOfLizard = dragon.sing.bind(lizard);
console.log(singOfLizard());