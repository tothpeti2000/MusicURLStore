/**
 * Get the playlist with the given ID from the DB
 * Save the result to res.locals.playlist
 */

module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return async (req, res, next) => {
    try {
      const playlist = await playlistModel
        .findById(req.params.playlistID)
        .populate("_tracks")
        .exec();

      if (playlist) {
        res.locals.playlist = playlist;
        return next();
      } else {
        return res.redirect("/playlists");
      }
    } catch (err) {
      return next(err);
    }
  };
};
