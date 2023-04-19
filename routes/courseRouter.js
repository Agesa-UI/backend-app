const express = require('express');
const CourseController = require('../controller/CourseController');

const router = express.Router();

// course route
router.get('course', CourseController.getCourse);
router.get('/course/:id', CourseController.getCourseById);
router.post('/course', CourseController.createCourse);

module.exports = router;
