/**
 * Get the track with the given ID from the DB
 * Save the result to res.locals.track
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.track = {
      _id: 1,
      title: "Rise",
      artist: "Skillet",
      description: "One of the greatest songs on the album Rise",
    };

    return next();
  };
};
