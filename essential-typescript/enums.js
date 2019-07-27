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
console.log(VideoStreamingState.Done);
