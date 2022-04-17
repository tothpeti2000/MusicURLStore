/**
 * Get the track with the given ID from the DB
 * Save the result to res.locals.track
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return async (req, res, next) => {
    try {
      const track = await trackModel.findById(req.params.trackID).exec();

      if (track) {
        res.locals.track = track;
        return next();
      } else {
        return res.redirect("/tracks");
      }
    } catch (err) {
      return next(err);
    }
  };
};
