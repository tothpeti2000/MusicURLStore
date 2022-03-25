/**
 * Get the tracks from the DB whose title or artist name contains the query string
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.tracks = objRepo.tracks.filter(
      (t) =>
        t.title.toUpperCase().includes(req.query.q.toUpperCase()) ||
        t.artist.toUpperCase().includes(req.query.q.toUpperCase())
    );

    return next();
  };
};
