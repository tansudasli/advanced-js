// run w/  tsc variables.ts && node variables.js
let apples_ = 5;         // type inference is possible instead of type annotations
let apples: number = 5;  // type annotations
console.log(apples);


let nothing: null = null;

let now: Date = new Date();  //built-in object
console.log(now);


let colors: string[] = ['red', 'green', 'blue'];
colors.forEach((value) => {
    console.log(value)
});

class Car {

}

// variable: Type = Instance;
let car: Car = new Car();

// Object literal
// variable: Type                 = Instance;
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

console.log(point);
console.log(`x: ${point.x}`);

// function
//     variable: Type                = Instance;
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
logNumber(5);

const json = '{"x": 10, "y": 30}';
// @ts-ignore
const coordinates = JSON.parse(json); // it returns any type. to fix this. USE type annotations!
const coordinates_: {x: number; y: number} = JSON.parse(json);

console.log(coordinates); // prone to error. and coordinates.x not possible !
console.log(coordinates_);
console.log(`x: ${coordinates_.x}`);


