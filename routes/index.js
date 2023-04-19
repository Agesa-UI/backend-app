const express = require('express');
const AppController = require('../controller/AppController');
const CourseController = require('../controller/CourseController');

const router = express.Router();

// App route
router.get('/', AppController.getHome);
router.get('/dashboard', AppController.getDashboard);
router.get('course', CourseController.getCourse);
router.get('/course/:id', CourseController.getCourseById);
router.post('/course', CourseController.createCourse);

module.exports = router;
