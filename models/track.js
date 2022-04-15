const db = require("../db/db");

const Track = db.Model("Track", {
  title: String,
  url: String,
  artist: String,
  description: String,
});

module.exports = Track;
