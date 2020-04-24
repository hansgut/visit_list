const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    date_plan: Date,
    date_fact: Date,
    visiting_teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher"
    },
    visited_teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher"
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    },
    lesson_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lessonType"
    },
    purpose: String,
    result: Array               // TODO change to object after create a model.
});

const Visit = mongoose.model("visit", VisitSchema);

module.exports = Visit;