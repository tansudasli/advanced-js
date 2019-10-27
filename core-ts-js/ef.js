//immediately executed functions = ef
(function start() {
    console.log("ef");
})();
(function send(message) {
    console.log("ef: " + message + " sent");
})('end');
//we ain't call w/ start();
