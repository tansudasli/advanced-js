'use strict';

// use chrome developer JS console to test.

let human = {
    name: 'unknown',
    mortal: 'true',

    walk() { return 1; }, //will create in every Object creation process !!

    talk: this.talk // much better approach!
};

function talk() { return 'bla bla' };



let aristo = Object.create(human);
aristo.name = 'aristo';
aristo.walk = () => { return 2; }; //overload w/ new implementation if you need

aristo.walk();
aristo.talk();
