function boo (){
    const message = 'call me may be';

    console.log('1');

    setTimeout(() => console.log(message),4000);

    console.log('2');
}

boo();

// boo invokes, in a new execution context . delivers line6 to web api engine
// message variable puffs. it goes to closure box
// that's how we access it

/*
function boo (){

    setTimeout(() => console.log(message),4000);

    const message = 'call me may be'; // if we put this here, even it is const, it works !!! it is not about hoisting!
}
*/
