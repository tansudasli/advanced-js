// setTimeout is handled by wepapi engine, not the stack !
console.log("1");
setTimeout(() => {console.log("2"), 1000});  //or setTimeout(function () {console.log("2"), 1000});
console.log("3");