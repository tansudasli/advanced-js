class KeyValuePair<TKey, TValue> {

    constructor(public k: TKey, public v: TValue) {

    }
}

let pair1 = new KeyValuePair(3, "uc");
let pair2 = new KeyValuePair("bes", 5);

console.log(pair1);
console.log(pair2);


//run w/  tsc generics.ts && node generics.js
