/**
 * If the request body is empty, it's a GET request so simply return next()
 * Otherwise, it's a POST request
 *      If res.locals.playlist is undefined, create a new entity, otherwise, update the playlist
 *      Redirect to /playlists after success
 */

const fs = require("fs");

module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return async (req, res, next) => {
    console.log("Name: " + req.body.name);
    console.log("Img: " + req.body.img);
    console.log("Tracks: " + req.body.tracks);

    if (
      typeof req.body.name === "undefined" /*||
      typeof req.body.img === "undefined" ||
      typeof req.body._tracks === "undefined"*/
    ) {
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
