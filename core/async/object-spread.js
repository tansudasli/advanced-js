const animals = {
    lion: 20,
    cat: 10,
    monkey: 5,
    bird: 40
};

const {lion, ...rest} = animals;

console.log(lion);
console.log(rest);

const clone = {...animals};
clone.lion = 30;

console.log('clone', clone);
console.log('animals', animals);
