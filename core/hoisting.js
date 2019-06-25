// var is not fully hoisted, just defined as undefined!
// functions are fully hoisted

console.log(one);

var one = 1;
var one = 2;
console.log(one);