/**
 * Get the tracks of the given playlist from the DB whose title or artist name contains the query string
 * Save the result to res.locals.playlist.tracks
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    /*const queryTracks = res.locals.playlist.tracks.filter(
      (t) =>
        t.title.toUpperCase().includes(req.query.q.toUpperCase()) ||
        t.artist.toUpperCase().includes(req.query.q.toUpperCase())
    );

    res.locals.playlist.tracks = queryTracks;*/

    return next();
  };
};
