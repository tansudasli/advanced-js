//normal fn
const multiply = (a, b) => a * b;

const r = multiply(2,3);
console.log(r);

//currying = one param at a time
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyByFive = curriedMultiply(5);

console.log(curriedMultiply(3)(4));

console.log(curriedMultiplyByFive(3));

//partial application
const partialMultiplyByFive = multiply.bind(null, 5);
console.log(partialMultiplyByFive(10));