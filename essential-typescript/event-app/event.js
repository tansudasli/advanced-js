"use strict";
exports.__esModule = true;
var VideoStreamingState;
(function (VideoStreamingState) {
    VideoStreamingState[VideoStreamingState["Passive"] = 1] = "Passive";
    VideoStreamingState[VideoStreamingState["Active"] = 2] = "Active";
    VideoStreamingState[VideoStreamingState["Done"] = 3] = "Done";
    VideoStreamingState[VideoStreamingState["Network_Error"] = 4] = "Network_Error";
    VideoStreamingState[VideoStreamingState["Network_Latency"] = 5] = "Network_Latency";
})(VideoStreamingState = exports.VideoStreamingState || (exports.VideoStreamingState = {}));
var EventState;
(function (EventState) {
    EventState[EventState["Created"] = 1] = "Created";
    EventState[EventState["Approved"] = 2] = "Approved";
    EventState[EventState["Not_Approved"] = 3] = "Not_Approved";
    EventState[EventState["Active"] = 4] = "Active";
    EventState[EventState["Finished"] = 5] = "Finished";
})(EventState = exports.EventState || (exports.EventState = {}));
var Event = /** @class */ (function () {
    function Event(id, name, state, location, longitude, latitude) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.location = location;
        this.longitude = longitude;
        this.latitude = latitude;
    }
    return Event;
}());
exports.Event = Event;
//to import later in interfaces.ts !
// export {VideoStreamingState, EventState, IEvent};
