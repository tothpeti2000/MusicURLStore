/**
 * Delete the track with the given trackID from the playlist stored in res.locals.playlist
 * Redirect to /playlist/:playlistID after success
 */

module.exports = (objRepo) => {
  return async (req, res, next) => {
    try {
      res.locals.playlist._tracks.remove({ _id: req.params.trackID });
      await res.locals.playlist.save();

      return res.redirect(`/playlist/${req.params.playlistID}`);
    } catch (err) {
      return next(err);
    }
  };
};
