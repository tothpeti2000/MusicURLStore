/**
 * Get all playlists from the DB
 * Save the result to res.locals.playlists
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.playlists = objRepo.playlists;

    return next();
  };
};
