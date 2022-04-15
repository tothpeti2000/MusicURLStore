/**
 * Get all tracks from the DB
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return (req, res, next) => {
    trackModel.find({}).exec((err, data) => {
      if (err) {
        return next(err);
      }

      res.locals.tracks = data;
      return next();
    });
  };
};
