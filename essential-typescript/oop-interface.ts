
// in fact there is no interface in js. that comes w/ typescript
import {VideoStreamingState} from "./enums";

//runs enums packages :)
// import "./enums";

interface IEvent {
    id: number;
    name: string;
    state: VideoStreamingState;
    location: string;
    longitude: number;
    latitude: number;

    createEvent();
    addEvent();

}
