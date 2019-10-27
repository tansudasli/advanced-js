const profile =  {
    name: 'alex',
    age: 25,
    coordinates: {lat: 30.453, lng: 30.45},

    setAge(age: number): void {
        this.age = age;
    }
};

// below works but we gonna create a func. inside object
// profile.age = 24;

// destructuring
// if you have multiple destructured values, we use :{} to define multiple returning values
const { age } = profile;
// @ts-ignore
const { coordinates } = profile;


console.log(age);
console.log(coordinates);

