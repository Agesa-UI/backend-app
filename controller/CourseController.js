const Course = require('../models/Course');


class CourseController {
    async getCourse(req, res, next) {
        try {
            const courses = await Course.find({owner: req.decoded.user._id});
            res.json({'Success': True, 'Courses': courses});
        } catch (error) {
            res.json({'Success': Error, 'Message': error.message});
        };

    };

    async createCourse(req, res, next) {
        try {
            const course = new Course();
            course.name = req.body.name;
            course.description = req.body.description;
            course.owner = req.decoded.user._id;
            await course.save();
            res.json({'Success': True, 'Course': course});
        } catch (error) {
            res.json({'Success': Error, 'Message': error.message});
        }
    };
    async getCourseById(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            res.json({'Success': True, 'Course': course});
        } catch (error) {
            res.json({'Success': Error, 'Message': error.message});
        }
    };
}

module.exports = CourseController();