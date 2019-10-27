// run w/ tsc arrays.ts && node arrays.js
// string[]
var carMakers = ['ford', 'toyota', 'chevy'];
var carsByMake = [
    ['mustang', 'focus', 'mondeo'],
    ['corolla'],
    ['camaro']
];
// variable      : type       = instance
var carsByMake_ = [];
// access by index or .pop() for last element (and removes it from memory) !
// console.log(carMakers.pop());
// console.log(carMakers[0]);
carMakers.forEach(function (car) {
    console.log(car.toLocaleUpperCase());
});
carMakers.map(function (car, index) {
    return car + ' produces ' + carsByMake[index];
})
    .forEach(function (car) {
    console.log(car.toLocaleUpperCase());
});
