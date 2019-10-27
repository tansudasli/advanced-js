// function
//     variable: Type                = Instance;
var logNumber_ = function (i) {
    console.log(i);
};
logNumber_(5);
// type annotation works
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 3));
// type inference works !
var add_ = function (a, b) {
    return a + b;
};
console.log(add_(1, 3));
// named function
function add__(a, b) {
    return a + b;
}
