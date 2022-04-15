const db = require("../db/db");

const Track = db.model("Track", {
  title: String,
  url: String,
  artist: String,
  description: String,
});

module.exports = Track;
