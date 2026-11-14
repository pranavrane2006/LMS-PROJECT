const Lesson = require("../models/Lesson");
const Course = require("../models/Course");

// 1. Create a new lesson
const createLesson = async (req, res) => {
    try {
        const {
            course,
            title,
            description,
            videoUrl,
            content,
            order,
            duration
        } = req.body;

        const existingCourse = await Course.findById(course);

        if (!existingCourse) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        const lesson = await Lesson.create({
            course,
            title,
            description,
            videoUrl,
            content,
            order,
            duration
        });

        res.status(201).json({
            success: true,
            message: "Lesson created successfully",
            lesson
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// 2. Get all lessons of a course
const getLessonsByCourse = async (req, res) => {
    try {
        const lessons = await Lesson.find({
            course: req.params.courseId
        }).sort({ order: 1 });

        res.status(200).json({
            success: true,
            count: lessons.length,
            lessons
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// 3. Get a single lesson
const getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);

        if (!lesson) {
            return res.status(404).json({
                success: false,
                message: "Lesson not found"
            });
        }

        res.status(200).json({
            success: true,
            lesson
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// 4. Update a lesson
const updateLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!lesson) {
            return res.status(404).json({
                success: false,
                message: "Lesson not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Lesson updated successfully",
            lesson
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// 5. Delete a lesson
const deleteLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);

        if (!lesson) {
            return res.status(404).json({
                success: false,
                message: "Lesson not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Lesson deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createLesson,
    getLessonsByCourse,
    getLessonById,
    updateLesson,
    deleteLesson
};