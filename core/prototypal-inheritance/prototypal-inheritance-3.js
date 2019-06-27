
let human = {
    mortal: true
};

//create a prototypal chain !
let socrates = Object.create(human);

console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));