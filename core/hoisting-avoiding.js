let favouriteFood = "grapes";

// favouriteFood

let foodThoughts = function() {
//     favouriteFood  gives error, because not defined nor hoisted !
    console.log("original favouriteFood = " + favouriteFood);

    const favouriteFood = "sushi";

    console.log("new favouriteFood = " + favouriteFood);
};

foodThoughts();

