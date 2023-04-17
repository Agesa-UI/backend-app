const express = require('express');
const AppController = require('../controller/AppController');

const router = express.Router();

// App route
router.get('/', AppController.getHome);
router.get('/dashboard', AppController.getDashboard);

module.exports = router;
