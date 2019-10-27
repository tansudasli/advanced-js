var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(k, v) {
        this.k = k;
        this.v = v;
    }
    KeyValuePair.prototype.print = function () {
        // console.log(this);
        console.log(this.k + ": " + this.v);
    };
    return KeyValuePair;
}());
var pair1 = new KeyValuePair(3, "uc");
var pair2 = new KeyValuePair("bes", 5);
console.log(pair1);
console.log(pair2);
//run w/  tsc generics.ts && node generics.js
//explicitly define params may better for compile time. such as Date.now() actually returns a number
var pair3 = new KeyValuePair("bes", 5);
var pair4 = new KeyValuePair("bes", new Date(Date.now()));
console.log(pair3);
pair4.print();
pair1.print();
