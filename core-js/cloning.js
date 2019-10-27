let c = [1, 2, 3, 4, 5];
let b = [].concat(c);
// var b = c;

b.push(123);

console.log(c)
console.log(b)

let obj = {a: "a", b: "b", c: "c"};
let objX = {a: "a",
            b: "b",
            c: { deep: "deep cloning" }
};

// let clone = Object.assign({}, obj); old way
let clone = {...obj};
let cloneDeep = JSON.parse(JSON.stringify(objX)); //watch performance issues.

obj.c = 5;
objX.c.deep = "hahahah";

console.log(clone);
console.log(obj);

console.log(objX);
console.log(cloneDeep);
