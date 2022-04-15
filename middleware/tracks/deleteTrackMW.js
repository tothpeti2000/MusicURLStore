/**
 * Used entity: res.locals.track
 * Delete the track from the DB
 * Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    if (typeof res.locals.track === "undefined") {
      return next();
    }

    res.locals.track.remove((err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/tracks");
    });
  };
};
