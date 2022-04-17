/**
 * Used entity: res.locals.track
 * Delete the track from the DB
 * Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return async (req, res, next) => {
    if (typeof res.locals.track === "undefined") {
      return res.redirect("/");
    }

    try {
      await trackModel.findByIdAndDelete(res.locals.track._id);
      return res.redirect("/tracks");
    } catch (err) {
      return next(err);
    }
  };
};
