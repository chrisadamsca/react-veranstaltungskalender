const Event = require('../models/events');
const Group = require('../models/groups');


module.exports.createNewEvent = (req, res) => {
  const data = req.body;

  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }

  const newEvent = new Event({
    name: data.name,
    description: data.description,
    location: data.location,
    date: data.date,
  });
  Group.update({ _id: data.gId }, { $addToSet: { groups: (newEvent) } }, (error) => {
    if (error) console.error(error);
    res.status(400).send('Gruppe nicht gefunden');
  });
  newEvent.save((err) => {
    if (err) return console.error(err);
    res.status(200).send('Event created!');
    return null;
  });
};

module.exports.getAllEvents = () => {
  Event.find((err, events) => {
    if (err) return console.error(err);
    console.log('Events:');
    console.log(events);
    return null;
  });
};

module.exports.returnEvent = (req, res) => {
  const data = req.params;
  if (data === undefined || data.length === 0) {
    res.status(400).send('Es wurden keine Daten gesendet');
    return;
  }
  Event.findById((data.eventId), (err, event) => {
    if (err) {
      res.status(400).send('Gruppe nicht gefunden');
      return;
    }
    res.status(200).send(event);
  });
};

module.exports.addEventToGroup = (req, res) => {
  const data = req.params;
  Event.findById((data.eventId), (err, event) => {
    Group.update({ _id: data.gId }, { $addToSet: { groups: (event) } }, (error) => {
      if (err) console.error(error);
      res.status(400).send('Gruppe nicht gefunden');
    });
    res.status(200).send('Event der Gruppe hinzugefügt');
  });
};
