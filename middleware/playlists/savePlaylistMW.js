/**
 * If the name field of the request body is empty, it's a GET request so simply return next()
 * Otherwise, it's a POST request
 *      If res.locals.playlist is undefined, create a new entity, otherwise, update the playlist
 *      Redirect to /playlists after success
 */

const fs = require("fs");

module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return async (req, res, next) => {
    if (typeof req.body.name === "undefined") {
      return next();
    }

    let playlist;

    if (typeof res.locals.playlist === "undefined") {
      playlist = new playlistModel();
    } else {
      playlist = res.locals.playlist;
    }

    playlist.name = req.body.name;

    if (req.file) {
      playlist.img = {
        data: fs.readFileSync(`public/uploads/${req.file.filename}`),
        contentType: "image/png",
      };
    }

    playlist._tracks = req.body.tracks;

    try {
      await playlist.save();
      return res.redirect("/playlists");
    } catch (err) {
      return next(err);
    }
  };
};
