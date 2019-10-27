# prototypal inheritance vs classical OOP inheritance 

use chrome developer
```
const arr = [];

arr.__proto__.__proto__.toString();
```


in JS, there is no classical inheritance, nor class (just a syntax).
there is prototypal inheritance.!!

- manually assigning [lizard.__proto__ = dragon;] is not performing well! use Object.create() instead.
- js does not copy inherited properties. it looks through the prototypal chain! very efficient !!

**to borrow a fn in js**, use below ways. 3 is the best way !!!

1- obj.fn.bind(objTarget) or call/apply
2- objTarget.__proto__ = obj
3- objTarget = Object.create(obj)

**to add a new function/ or override**,

1- obj.prototype.newFN = { }

We can use Object Literals or Functions 
