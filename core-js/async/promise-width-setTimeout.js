const promise = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Hi'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'ffwygr56ynkij8h'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'It is mee'));

Promise.all([promise, promise2, promise3])
       .then(value => console.log(value));

//waits all steps should be completed.

//if we run <const promise=> lines before, Promise.all() runs faster due to time tic tak !