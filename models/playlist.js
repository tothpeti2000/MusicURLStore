const { Schema } = require("../db/db");
const db = require("../db/db");

const Playlist = db.model("Playlist", {
  name: String,
  img: String,
  tracks: [{ type: Schema.Types.ObjectId, ref: "Track" }],
});

module.exports = Playlist;
