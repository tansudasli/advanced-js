/*
HOF, takes a fn or returns a fn
 */
const boo = ()  =>  5;
const zoo = (fn)  =>  fn(3);

//1- returns a function
console.log(boo());

//2- takes fn as parameter
console.log(zoo((x) => x));

/*
closure: define a fn, inside a fn. so fn can access outside
 */
const closure = () => {
    let count = 0;

    //outer scope
    // in this case, we are modifying it inside !. not pure
    const increment = () => {
        count++;
        return count;
    };

    //not modifying inside. PURE function
    const getCount = () => {
        return count;
    };

    //make public
    return {
        increment: increment(),
        getCount: getCount()
    }
};

console.log(closure);   //[Function: closure]
console.log(closure()); // { increment: 1, getCount: 1 }

const f = closure();
console.log(f.increment);   //1
console.log(f.increment);   //1
console.log(f.increment);   //1
console.log(f.getCount);    //1

