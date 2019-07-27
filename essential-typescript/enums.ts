enum VideoStreamingState {
    Pasive = 1,
    Active,
    Done,
    Network_Error,
    Network_Latency
}

console.log(VideoStreamingState.Done);

//to import later in oop-interface.ts !
export {VideoStreamingState};
