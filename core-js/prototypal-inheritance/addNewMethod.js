//add a new method to built in Date function
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
};

console.log(new Date('2010-02-01').lastYear());