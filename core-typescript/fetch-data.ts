import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/albums';

axios.get(url).then(response => {
    console.log(response.data);
});


// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(response => response.json())
//     .then(json => console.log(json))