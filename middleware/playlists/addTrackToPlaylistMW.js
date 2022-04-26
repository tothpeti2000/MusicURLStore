/**
 * Add a new track ID reference to the playlist stored in res.locals.playlist from res.locals.track
 * Redirect to /playlist/:playlistID after success
 */

module.exports = (objRepo) => {
  return async (req, res, next) => {
    if (typeof res.locals.track !== "undefined") {
      res.locals.playlist._tracks.push(res.locals.track._id);

      try {
        await res.locals.playlist.save();

        return res.redirect(`/playlist/${req.params.playlistID}`);
      } catch (err) {
        return next(err);
      }
    }

    return next();
  };
};
