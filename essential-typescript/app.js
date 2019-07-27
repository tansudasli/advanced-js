"use strict";
// external module approach
exports.__esModule = true;
var event_js_1 = require("./event.js");
var events = [new event_js_1.Event(123, "Jenkins 2019", event_js_1.EventState.Finished, "Mascone center", 0, 0),
    new event_js_1.Event(124, "Wmvare 2019", event_js_1.EventState.Not_Approved, "Mascone center", 0, 0),
    new event_js_1.Event(125, "Oracle Openworld 2019", event_js_1.EventState.Active, "Mascone center", 0, 0)];
for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
    var e = events_1[_i];
    console.log(e);
}
var container = document.getElementById('container');
container.innerHTML = "\n        <ul class=\"list-group\">\n            <li id=\"" + events[0].id + "\" class=\"" + (events[0].state == event_js_1.EventState.Finished ? "list-group-item  list-group-item-success" : "list-group-item active") + "\">" + events[0].name + "</li>\n            <li id=\"" + events[1].id + "\" class=\"" + (events[1].state == event_js_1.EventState.Finished ? "list-group-item  list-group-item-success" : "list-group-item active") + "\">" + events[1].name + "</li>\n            <li id=\"" + events[2].id + "\" class=\"" + (events[2].state == event_js_1.EventState.Finished ? "list-group-item  list-group-item-success" : "list-group-item active") + "\">" + events[2].name + "</li>\n        </ul>\n";
