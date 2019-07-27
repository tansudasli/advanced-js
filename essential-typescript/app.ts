// external module approach

import {Event, EventState} from "./event.js";


let events: Event[] = [ new Event(123, "Jenkins 2019", EventState.Finished, "Mascone center", 0,0),
                        new Event(124, "Wmvare 2019", EventState.Not_Approved, "Mascone center", 0,0),
                        new Event(125, "Oracle Openworld 2019", EventState.Active, "Mascone center", 0,0)];


for (var e of events)
    console.log(e);


const container = document.getElementById('container');

container.innerHTML = `
        <ul class="list-group">
            <li id="${events[0].id}" class="${events[0].state == EventState.Finished ? "list-group-item  list-group-item-success" : "list-group-item active"}">${events[0].name}</li>
            <li id="${events[1].id}" class="${events[1].state == EventState.Finished ? "list-group-item  list-group-item-success" : "list-group-item active"}">${events[1].name}</li>
            <li id="${events[2].id}" class="${events[2].state == EventState.Finished ? "list-group-item  list-group-item-success" : "list-group-item active"}">${events[2].name}</li>
        </ul>
`;

