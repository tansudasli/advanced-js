// function is fully hoisted

a(); //says bye !

function a() {
    console.log("hi")
}

function a() {
    console.log("bye")
}

a() //says bye !

// in global execution, there are execution and creation phases, separately,
// in global execution context, for a function, a different execution context created
// and contains again execution & creation phases again