/**
 * Get all playlists from the DB
 * Save the result to res.locals.playlists
 */

module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return async (req, res, next) => {
    try {
      res.locals.playlists = await playlistModel.find({});
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
