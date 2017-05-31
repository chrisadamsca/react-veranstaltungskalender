const express = require('express');
const event = require('../api/event');

const router = new express.Router();

router.get('/getEvents', (req, res) => {
  event.getAllEvents(req, res);
});

router.get('/getEventById/:eventId', (req, res) => {
  event.returnEvent(req, res);
});

router.get('/addEventToGroup/:eventId/:groupId', (req, res) => {
  event.addEventToGroup(req, res);
});

// new User: use
router.post('/', (req, res) => {
  event.createNewEvent(req, res);
});

module.exports = router;
