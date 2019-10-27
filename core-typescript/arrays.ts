// run w/ tsc arrays.ts && node arrays.js

// string[]
const carMakers = ['ford', 'toyota', 'chevy'];

const carsByMake = [
  ['mustang', 'focus', 'mondeo'],
  ['corolla'],
  ['camaro']
];

// variable      : type       = instance
const carsByMake_: string[][] = [];

// access by index or .pop() for last element (and removes it from memory) !
// console.log(carMakers.pop());
// console.log(carMakers[0]);

carMakers.forEach((car) => {
  console.log(car.toLocaleUpperCase());
});

carMakers.map((car, index) => {
            return car + ' produces ' + carsByMake[index];})
         .forEach(car => {
            console.log(car.toLocaleUpperCase());
         }
);
