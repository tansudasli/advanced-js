const wizard = {
    name: 'merlin',
    health: 60,

    heal(v1, v2) {
        return this.health += v1 + v2;
    }
};

const archer = {
    name: 'robin hood',
    health: 30
};

wizard.heal.call(archer, 10, 10);    // 30 + 20
wizard.heal.apply(archer, [10, 10]); // 50 + 20

const healArcher = () => wizard.heal.bind(archer, 20, 20);
healArcher()();                      // 70 + 40

console.log(archer);

// all of them gives borrowing a function from another object.!!
// apply and call is same and invokes immediately. apply just takes parameters as an array! both
// bind, returns a function, so you can invoke it later!
