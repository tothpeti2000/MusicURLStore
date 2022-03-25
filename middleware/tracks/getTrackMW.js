/**
 * Get the track with the given ID from the DB
 * Save the result to res.locals.track
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.track = objRepo.tracks.find((t) => t._id === req.params.trackID);

    return next();
  };
};
