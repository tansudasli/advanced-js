//class version
'use strict';

/*
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();

*/

let animal = {
    name: 'none',
    speak() {
        console.log(`${this.name} is speaking`);
    }
};

let dog = Object.create(animal);
dog.name = 'Spot';
dog.speak = () => console.log(`${dog.name} is barking`);
dog.speak();