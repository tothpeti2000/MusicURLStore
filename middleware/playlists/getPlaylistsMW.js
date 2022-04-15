/**
 * Get all playlists from the DB
 * Save the result to res.locals.playlists
 */

module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return (req, res, next) => {
    playlistModel.find({}).exec((err, data) => {
      if (err) {
        return next(err);
      }

      res.locals.playlists = data;
      return next();
    });
  };
};
