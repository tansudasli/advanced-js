let container = document.getElementById('container');

//set initial values
function countdown(initial, final = 0, interval = 1) {
    let current = initial;

    while (current > final) {
        container.innerHTML = current;

        current -= interval;
    }
    
}


//mostly we will use
countdown(10, 0, 1);

/*
run  'tsc optional-parameters.ts'
then, check optional-parameters.js to see how js handles optional params!
*/
