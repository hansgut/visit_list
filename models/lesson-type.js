const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonTypeSchema = new Schema({
    name: String
});

const LessonType = mongoose.model("lessonType", LessonTypeSchema);

module.exports = LessonType;