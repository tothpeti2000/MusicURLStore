/**
 * Used entity: res.locals.track
 * Delete the track from the DB
 * Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return (req, res, next) => {
    if (typeof res.locals.track === "undefined") {
      return res.redirect("/");
    }

    trackModel.deleteOne({ _id: res.locals.track._id }, (err) => {
      if (err) {
        return next(err);
      }

      return res.redirect("/tracks");
    });
  };
};
