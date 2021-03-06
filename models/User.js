const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create user schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    position: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "position"
    }
});

module.exports = User = mongoose.model('users', UserSchema);