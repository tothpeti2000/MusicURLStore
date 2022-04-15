/**
 * Get the playlists from the DB whose title contains the query string
 * Save the result to res.locals.playlists
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    /*res.locals.playlists = objRepo.playlists.filter((p) =>
      p.name.toUpperCase().includes(req.query.q.toUpperCase())
    );*/

    return next();
  };
};
