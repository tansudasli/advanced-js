
function a () {
    let grandpa = 'grandpa';

    return function b() {
         let father = 'father';

         return function c() {
             let son = 'child';

             return `${grandpa} | ${father} | ${son};`

         }

    }
}

console.log(a())
console.log(a()())
console.log(a()()())

console.log(a => a.b())

// after invoked a(), goes out of stack and grandpa variable,which is referenced by another fn,
// goes to the closure box in memory. so gc can not mark and sweep !
// that's how we access variables out side of [function execution context] !!

// lexical (where defined) scope (where accessed)

// so, if there is a need , such as a big array, you should
// 1- put global variable (polliding global)
// 2- better way, use closures. return a function to write variable into closure box !!