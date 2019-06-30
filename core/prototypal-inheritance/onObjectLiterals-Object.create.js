
let human = {
    mortal: true,

    walk() {},

    talk: this.talk
};

function talk() {}

//create a prototypal chain !
let socrates = Object.create(human);

console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));

/*
the drawback in this scenario is, every time we create a human object, it creates walk fn.
so, defining walk dn outside is much better (consider it)
 */