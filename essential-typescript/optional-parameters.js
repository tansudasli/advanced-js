var container = document.getElementById('container');
//set initial values
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
//mostly we will use
countdown(10, 0, 1);
