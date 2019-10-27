//overload map() function
Array.prototype.map = function () {
    let arr = [];

    for (let i = 0; i < this.length; i++)
        arr.push((this[i] + '💥'));

    return arr;
};

console.log([1,2,3].map());

