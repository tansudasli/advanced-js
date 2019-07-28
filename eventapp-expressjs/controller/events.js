//handles relation between model and view
//create data w/ model, then sends data to view w/ template-engine

const Event = require('../model/event');

//state = Created = 1,Approved,Not_Approved,Active,Finished
const events = [new Event(123, "Jenkins 2019", 4, "Mascone center", 0,0),
                new Event(124, "Wmvare 2019", 3, "Mascone center", 0,0),
                new Event(125, "Oracle Openworld 2019", 4, "Mascone center", 0,0)];


exports.getEvents = (req, res, next) => {

    res.render('index.ejs',
               {events: events, title: 'Events', hasEvents: events.length > 0});
};
