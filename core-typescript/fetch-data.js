"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/albums';
axios_1.default.get(url)
    .then(function (response) { return console.log(response.data); })
    .catch(function (error) { return console.log(error); });
// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(response => response.json())
//     .then(json => console.log(json))
//# sourceMappingURL=fetch-data.js.map