
export enum VideoStreamingState {
    Passive = 1,
    Active,
    Done,
    Network_Error,
    Network_Latency
}

export enum EventState {
    Created = 1,
    Approved,
    Not_Approved,
    Active,
    Finished
}

// if you have a script to do some kind of things !
// import "./enums";

export interface IEvent {

    id: number;
    name: string;
    state: EventState;
    location: string;
    longitude: number;
    latitude: number;


    // createEvent();
    // addEvent();

}

export class Event implements IEvent {


    constructor(public id: number,
                public name: string,
                public state: EventState,
                public location: string,
                public longitude: number,
                public latitude: number) {
    }

}


//to import later in interfaces.ts !
// export {VideoStreamingState, EventState, IEvent};

