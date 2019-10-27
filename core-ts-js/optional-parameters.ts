

//set initial values
function countdown(initial, final = 0, interval = 1) {
    const container = document.getElementById('container');

    let current = initial;

    while (current >= final) {

        container.innerHTML = current;

        current -= interval;
    }
    
}


//mostly we will use
countdown(10, 6, 1);

/*
run  'tsc optional-parameters.ts'
then, check optional-parameters.js to see how js handles optional params!
run, index.html to see in a browser
open console, and run countdown(10,3,1) to play
*/
