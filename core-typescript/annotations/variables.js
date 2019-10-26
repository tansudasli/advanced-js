// run w/  tsc variables.ts && node variables.js
var apples_ = 5; // type inference
var apples = 5; // type annotations
console.log(apples);
var nothing = null;
var now = new Date(); //built-in object
console.log(now);
var colors = ['red', 'green', 'blue'];
colors.forEach(function (value) {
    console.log(value);
});
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// variable: Type = Instance;
var car = new Car();
// Object literal
// variable: Type                 = Instance;
var point = {
    x: 10,
    y: 20
};
console.log(point);
console.log("x: " + point.x);
// function
//     variable: Type                = Instance;
var logNumber = function (i) {
    console.log(i);
};
logNumber(5);
var json = '{"x": 10, "y": 30}';
var coordinates = JSON.parse(json);
console.log(coordinates);
