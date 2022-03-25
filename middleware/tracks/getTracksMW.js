/**
 * If there are no query params in the URL, get all tracks from the DB
 * Otherwise, get only the tracks whose title or artist name contains the given query param
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    return next();
  };
};
