const promise = new Promise((resolve, reject) => {

    true ? resolve('worked') : reject('rejected');

});

promise.then(result => console.log(result));  //worked

promise.then(r1 => r1 + '!')                  //worked
       .then(r2 => console.log(r2));          //worked!


//error scenario
promise.then(r1 => r1 + '!')                  //worked
    .then(r2 => {
        throw Error('error!');

        console.log(r2);
    })
    .catch((error) => console.log(error.message));


/*
promises are good for async programming.
 */