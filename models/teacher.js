const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    position: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "position"
    }
});

const Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;