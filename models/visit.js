const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    date_plan: Date,
    date_fact: Date,
    visiting_teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    visited_teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    },
    lesson_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lessonType"
    },
    visits_list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "visitsList"
    },
    purpose: String,
    result: String
});

const Visit = mongoose.model("visit", VisitSchema);

module.exports = Visit;