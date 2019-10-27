
// function
//     variable: Type                = Instance;
const logNumber_: (i: number) => void = (i: number) => {
    console.log(i);
};
logNumber_(5);

// type annotation works
const add = (a: number, b: number) : number => {

    return a + b;
};
console.log(add(1,3));

// type inference works !
const add_ = (a: number, b: number) => {

    return a + b;
};
console.log(add_(1,3));

// named function
function add__(a: number, b: number): number {

    return a + b;
}




