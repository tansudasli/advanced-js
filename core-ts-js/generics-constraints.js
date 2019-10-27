//extends keyword for constraint
// function totalLength<T extends {length: number}>(x: T, y:T) {  //who has a length property
function totalLength(x, y) {
    return x.length + y.length;
}
console.log(totalLength('5', '9'));
