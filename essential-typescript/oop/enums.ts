enum VideoStreamingState {
    Pasive = 1,
    Active,
    Done,
    Network_Error,
    Network_Latency
}

enum EventState {
    Created = 1,
    Approved,
    Not_Approved,
    Active,
    Finished
}

console.log(VideoStreamingState.Done);

//to import later in interfaces.ts !
export {VideoStreamingState};
export {EventState};
