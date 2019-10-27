var profile = {
    name: 'alex',
    age: 25,
    coordinates: { lat: 30.453, lng: 30.45 },
    setAge: function (age) {
        this.age = age;
    }
};
// below works but we gonna create a func. inside object
// profile.age = 24;
// destructuring
var age = profile.age;
// @ts-ignore
var coordinates = profile.coordinates;
console.log(age);
console.log(coordinates);
