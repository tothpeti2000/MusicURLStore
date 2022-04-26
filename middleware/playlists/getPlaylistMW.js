/**
 * Get the playlist with the given ID including the tracks it contains from the DB
 * If the playlist doesn't exist, return to /playlists
 *
 * Save the playlist to res.locals.playlist and its tracks to res.locals.tracks
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
        res.locals.tracks = playlist._tracks;
        return next();
      } else {
        return res.redirect("/playlists");
      }
    } catch (err) {
      return next(err);
    }
  };
};
