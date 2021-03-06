const express = require('express');
const eventRouter = express.Router();
const eventController = require('../controllers/eventController.js');

// COMPLETED
eventRouter.put(
  '/:username/:event',
  eventController.editEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json(res.locals.allEvents);
  }
);

// COMPLETED
eventRouter.delete(
  '/:username/:event',
  eventController.deleteEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json(res.locals.allEvents);
  }
);

// COMPLETED
eventRouter.post(
  '/:username',
  eventController.addNewEvent,
  eventController.addCreatorToEvent,
  eventController.getUserEvents,
  (req, res) => {
    res.status(200).json(res.locals.allEvents);
  }
);

// COMPLETED
eventRouter.get(
  '/:username/:event',
  eventController.getParticipants,
  (req, res) => {
    res.status(200).json(res.locals.participants);
  }
);

module.exports = eventRouter;
