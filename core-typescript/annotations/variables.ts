// run w/  tsc variables.ts && node variables.js
let apples_ = 5;         // type inference
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
const coordinates = JSON.parse(json);
console.log(coordinates);


