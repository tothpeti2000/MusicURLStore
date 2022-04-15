/**
 * Get all tracks from the DB
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    //res.locals.tracks = objRepo.tracks;

    return next();
  };
};
