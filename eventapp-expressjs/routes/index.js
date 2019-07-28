var express = require('express');
var router = express.Router();

const eventsController = require('../controller/events');
const path = require('path');

/* GET home page. */
router.get('/', eventsController.getEvents);

module.exports = router;
