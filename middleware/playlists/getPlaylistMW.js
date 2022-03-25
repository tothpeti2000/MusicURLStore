/**
 * Get the playlist with the given ID from the DB
 * Save the result to res.locals.playlist
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.playlist = objRepo.playlists.find(
      (p) => p._id === req.params.playlistID
    );

    return next();
  };
};
