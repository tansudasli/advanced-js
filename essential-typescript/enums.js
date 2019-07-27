var VideoStreamingState;
(function (VideoStreamingState) {
    VideoStreamingState[VideoStreamingState["Pasive"] = 1] = "Pasive";
    VideoStreamingState[VideoStreamingState["Active"] = 2] = "Active";
    VideoStreamingState[VideoStreamingState["Done"] = 3] = "Done";
    VideoStreamingState[VideoStreamingState["Network_Error"] = 4] = "Network_Error";
})(VideoStreamingState || (VideoStreamingState = {}));
console.log(VideoStreamingState.Done);
