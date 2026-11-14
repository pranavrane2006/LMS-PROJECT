const express = require("express");
const router = express.Router();

const {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} = require("../controllers/courseController");

// Create course
router.post("/", createCourse);

// Get all courses
router.get("/", getAllCourses);

// Get single course
router.get("/:id", getCourseById);

// Update course
router.put("/:id", updateCourse);

// Delete course
router.delete("/:id", deleteCourse);

module.exports = router;