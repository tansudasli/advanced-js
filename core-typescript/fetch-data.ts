import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/albums';

axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));


// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(response => response.json())
//     .then(json => console.log(json))