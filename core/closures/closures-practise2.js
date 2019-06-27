const array = [1,2,3,4];

/*
for (var i=0; i < array.length; i++) {

if you use var, you see always 4!!
 */
for (let i=0; i < array.length; i++) {
    setTimeout(() => { console.log(array[i]) }, 3000);
}