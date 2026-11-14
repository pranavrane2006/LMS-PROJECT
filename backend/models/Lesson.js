const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
    {
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String
        },

        videoUrl: {
            type: String
        },

        content: {
            type: String
        },

        order: {
            type: Number,
            required: true
        },

        duration: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Lesson", lessonSchema);