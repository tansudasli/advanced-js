//run in chrome browser's javascript console
// fetch is not available in nodejs ! or use axios library

const endpoints = ['https://jsonplaceholder.typicode.com/posts',
                   'https://jsonplaceholder.typicode.com/comments'];

Promise.all(endpoints.forEach(e => fetch(e).then(r => r.json())
                                                     .then(r => console.log(r))))
        .then(results => {
            console.log(results[0]);
            console.log(results[1]);
         })
        .catch((error) => console.log(error.message));

/*
endpoints.forEach(e => fetch(e).then(r => r.json())
                               .then(r => console.log(r)))

 */