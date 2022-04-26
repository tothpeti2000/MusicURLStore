/**
 * Used entity: res.locals.playlist
 * Redirect to / if it doesn't exist
 *
 * Delete the playlist from the DB
 * Redirect to /playlists after success
 */

module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return async (req, res, next) => {
    if (typeof res.locals.playlist === "undefined") {
      return res.redirect("/");
    }

    try {
      await playlistModel.findByIdAndDelete(res.locals.playlist._id);
      return res.redirect("/playlists");
    } catch (err) {
      return next(err);
    }
  };
};
