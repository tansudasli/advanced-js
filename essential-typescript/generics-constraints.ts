//extends keyword for constraint

// function totalLength<T extends {length: number}>(x: T, y:T) {  //who has a length property
function totalLength<T extends String>(x: T, y:T) {
    return x.length + y.length;
}


console.log(totalLength('5', '9'));
