const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/music");

module.exports = mongoose;
