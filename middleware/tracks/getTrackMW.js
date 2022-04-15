/**
 * Get the track with the given ID from the DB
 * Save the result to res.locals.track
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return (req, res, next) => {
    trackModel.findOne({ _id: req.params.trackID }).exec((err, data) => {
      if (err) {
        return next(err);
      }

      if (!data) {
        return res.redirect("/tracks");
      }

      res.locals.track = data;
      return next();
    });
  };
};
