
// in fact there is no interface in js. that comes w/ typescript
import {VideoStreamingState, EventState} from "./enums";

//runs enums packages :)
// import "./enums";

interface IEvent {
    id: number;
    name: string;
    state: EventState;
    location: string;
    longitude: number;
    latitude: number;

    createEvent();
    addEvent();

}

interface IEventDetail {
    id: number;
    name: string;
    state: VideoStreamingState;
    room: string;


    createEventDetail();
    attachToEvent();

}


export {IEvent, IEventDetail};

