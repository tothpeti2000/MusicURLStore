/**
 * Get the playlists from the DB whose name contains the query string
 * Save the result to res.locals.playlists
 */

module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return async (req, res, next) => {
    const regExp = new RegExp(req.query.q, "i");

    try {
      res.locals.playlists = await playlistModel.find({ name: regExp }).exec();
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
