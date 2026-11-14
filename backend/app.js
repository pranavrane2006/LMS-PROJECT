const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("LMS Backend API is running!");
});

// Course routes
const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);
// Lesson routes
const lessonRoutes = require("./routes/lessonRoutes");
app.use("/api/lessons", lessonRoutes);

module.exports = app;