var favouriteFood = "grapes";

// favouriteFood

var foodThoughts = function() {
//     favouriteFood  as undefined due to line 9
    console.log("original favouriteFood = " + favouriteFood);

    var favouriteFood = "sushi";

    console.log("new favouriteFood = " + favouriteFood);
};

foodThoughts();

// output will be below!
// original favouriteFood = undefined
// new favouriteFood = sushi

// in global execution, there are execution and creation phases, separately,
// in an execution context. In a function, a different execution context created
// and contains again execution & creation phases again

// so to make code predictable, via avoiding hoisting, use const and let
