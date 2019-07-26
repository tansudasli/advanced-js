const container = document.getElementById('container');

// var toDo = {
//     id: 123,
//     name: "Pick up truck",
//     completed: false
// };


const toDo = [ {id: 123, name: "Pick up truck", completed: true},
               {id: 124, name: "Pick me up", completed: false},
               {id: 125, name: "Bring back truck", completed: false}
               ];

//dont use [[ ]], `` is much better
container.innerHTML = `
        <ul class="list-group">
            <li id="${toDo[0].id}" class="${toDo[0].completed ? "list-group-item  list-group-item-success" : "list-group-item active"}">${toDo[0].name}</li>
            <li id="${toDo[1].id}" class="${toDo[1].completed ? "list-group-item  list-group-item-success" : "list-group-item active"}">${toDo[1].name}</li>
            <li id="${toDo[2].id}" class="${toDo[2].completed ? "list-group-item  list-group-item-success" : "list-group-item active"}">${toDo[2].name}</li>
        </ul>
`;



