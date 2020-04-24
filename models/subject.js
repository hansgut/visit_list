const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
   name: String
});

const Subject = mongoose.model("subject", SubjectSchema);

module.exports = Subject;