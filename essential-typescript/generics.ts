class KeyValuePair<TKey, TValue> {

    constructor(public k: TKey, public v: TValue) {

    }
}

let pair1 = new KeyValuePair(3, "uc");
let pair2 = new KeyValuePair("bes", 5);

console.log(pair1);
console.log(pair2);


//run w/  tsc generics.ts && node generics.js

//explicitly define params may better for compile time. such as Date.now() actually returns a number
let pair3 = new KeyValuePair<string, number>("bes", 5);
let pair4 = new KeyValuePair<string, Date>("bes", new Date(Date.now()));

console.log(pair3);
console.log(pair4);
