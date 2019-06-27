import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/albums/10';

// to decrease errors in compile time
interface album {
    userId: number,
    id: number,
    title: string
}

//format as u wish while decreasing compile time error possibility w/ using JSOn object as parameter
const logs = (album) => console.log('{ userId: '+ album.userId + ', id:' + album.id + ', title: ' + album.title + ' }');

axios.get(url)
    .then(response => {
        const albums = response.data as album;

        logs(albums);
    })
    .catch(error => console.log(error));

