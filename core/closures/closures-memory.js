//polluting global variables
const x = new Array(1000)
            .fill('i k')
            .flatMap(e => e.split(' '));

// bad memory usage.
// creating x for many times !!!
function f () {
    const x = new Array(1).fill('i k')
        .flatMap(e => e.split(' '));

    console.log('created f');
    return x;
}

console.log(f());
console.log(f());

// use closure. to optimize memory usage
function fc () {
    const x = new Array(1)
                .fill('i k')
                .flatMap(e => e.split(' '));

    console.log('created fc');

    return function () {
        return x; //after fn execution context out, x added into  closure box!

    };
}

const getFC = fc();  //if you call fc()() fc()() again 'n again, created again!

console.log(getFC());
console.log(getFC());