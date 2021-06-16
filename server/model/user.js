const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    fullname: { type: String },
    age: { type: Number },
    city: { type: String },
    email: { type: String },
    phone: { type: String },
});
module.exports = mongoose.model("User", UserSchema);
