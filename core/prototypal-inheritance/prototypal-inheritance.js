const arr = [];

//use chrome developer

arr.__proto__.__proto__.toString();

/*
in Js, there is no classical inheritance,nor class (just a syntax).
there is prototypal inheritance.!!

- manually assiging [lizard.__proto__ = dragon;] is not performing well!
- js does not copy inherited properties. it looks through the prototypal chain! very efficient !!
 */