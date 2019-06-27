
function a () {
    let grandpa = 'grandpa';

    return function b() {
         let father = 'father';

         return function c() {
             let child = 'child';

             return `${grandpa} | ${father} | ${child};`

         }

    }
}

console.log(a())
console.log(a()())
console.log(a()()())