/**
 * Get all tracks from the DB
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return async (req, res, next) => {
    try {
      res.locals.tracks = await trackModel.find({});
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
