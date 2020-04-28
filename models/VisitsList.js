const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitsListSchema = new Schema({
    name: String
});

const VisitsList = mongoose.model("visitsList", VisitsListSchema);

module.exports = VisitsList;