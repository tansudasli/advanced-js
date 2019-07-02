
//used closure to access cache outside of fn scope.
const memoizedAddTo80 = () => {
    let cache = {};

    return function (n) {

        if (n in cache)
            return cache[n];
        else {
            console.log('loading....');

            cache[n] = n + 80;
            return cache[n];
        }
    }
};

const memoized = memoizedAddTo80();

console.log(memoized(80));
console.log(memoized(80)); //comes from cache
console.log(memoized(80)); //comes from cache

console.log(memoized(8)); //comes from cache
console.log(memoized(8)); //comes from cache