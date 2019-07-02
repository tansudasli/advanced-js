//polluting global. ideally should be in fn. closures !
let cache = {};

const memoizedAddTo80 = (n) => {
    if (n in cache)
        return cache[n];
    else {
        console.log('loading....');

        cache[n] = n + 80;
        return cache[n];
    }
};


console.log(memoizedAddTo80(80));
console.log(memoizedAddTo80(80)); //comes from cache
console.log(memoizedAddTo80(80)); //comes from cache