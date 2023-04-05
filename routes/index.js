const express = require('express');
const AppController = require('../controller/AppController');

const router = express.Router();

// App route
router.get('/', AppController.getHome);

module.exports = router;
