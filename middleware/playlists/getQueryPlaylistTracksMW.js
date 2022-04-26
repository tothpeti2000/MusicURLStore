/**
 * Used entity: res.locals.playlist._tracks
 *
 * Get the tracks of the given playlist from the DB whose title or artist name contains the query string
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  return async (req, res, next) => {
    const regExp = new RegExp(req.query.q, "i");

    const tracks = res.locals.playlist._tracks;

    res.locals.tracks = tracks.filter(
      (track) => track.title.match(regExp) || track.artist.match(regExp)
    );

    return next();
  };
};
