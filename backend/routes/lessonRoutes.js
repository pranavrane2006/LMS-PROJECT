const express = require("express");
const router = express.Router();

const {
    createLesson,
    getLessonsByCourse,
    getLessonById,
    updateLesson,
    deleteLesson
} = require("../controllers/lessonController");

// Create lesson
router.post("/", createLesson);

// Get all lessons of a course
router.get("/course/:courseId", getLessonsByCourse);

// Get a single lesson
router.get("/:id", getLessonById);

// Update lesson
router.put("/:id", updateLesson);

// Delete lesson
router.delete("/:id", deleteLesson);

module.exports = router;