"use strict";
exports.__esModule = true;
var VideoStreamingState;
(function (VideoStreamingState) {
    VideoStreamingState[VideoStreamingState["Pasive"] = 1] = "Pasive";
    VideoStreamingState[VideoStreamingState["Active"] = 2] = "Active";
    VideoStreamingState[VideoStreamingState["Done"] = 3] = "Done";
    VideoStreamingState[VideoStreamingState["Network_Error"] = 4] = "Network_Error";
    VideoStreamingState[VideoStreamingState["Network_Latency"] = 5] = "Network_Latency";
})(VideoStreamingState || (VideoStreamingState = {}));
exports.VideoStreamingState = VideoStreamingState;
var EventState;
(function (EventState) {
    EventState[EventState["Created"] = 1] = "Created";
    EventState[EventState["Approved"] = 2] = "Approved";
    EventState[EventState["Not_Approved"] = 3] = "Not_Approved";
    EventState[EventState["Active"] = 4] = "Active";
    EventState[EventState["Finished"] = 5] = "Finished";
})(EventState || (EventState = {}));
exports.EventState = EventState;
console.log(VideoStreamingState.Done);
