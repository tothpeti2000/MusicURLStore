/**
 * Get the tracks from the DB whose title or artist name contains the query string
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return async (req, res, next) => {
    const regExp = new RegExp(req.query.q, "i");

    try {
      res.locals.tracks = await trackModel
        .find({
          $or: [{ title: regExp }, { artist: regExp }],
        })
        .exec();
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
