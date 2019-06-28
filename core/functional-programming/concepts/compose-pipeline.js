//Rambda is such kind of library

//compose = right 2 left
//use f2 first!
const compose = (f1, f2) => (data) => f1(f2(data));

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

//below fn ordered, assembled in many ways. compose means, creating a pipeline w/ many functions
const multiplyBy3AndMakePositive = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndMakePositive(-50));

//pipe = left 2 right
// use f1 first