/**
 * Add a new track to the playlist stored in res.locals.playlist from req.body
 * Redirect to /playlist/:playlistID after success
 */

module.exports = (objRepo) => {
  return async (req, res, next) => {
    if (typeof res.locals.track !== "undefined") {
      res.locals.playlist._tracks.push(res.locals.track._id);
      await res.locals.playlist.save();

      return res.redirect(`/playlist/${req.params.playlistID}`);
    }

    return next();
  };
};
