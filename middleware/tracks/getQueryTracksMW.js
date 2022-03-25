/**
 * Get the tracks from the DB whose title or artist name contains the query string
 * Save the result to res.locals.tracks
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.tracks = [
      {
        _id: 1,
        title: "Rise",
        artist: "Skillet",
        description: "One of the greatest songs on the album Rise",
      },
      {
        _id: 2,
        title: "Rise",
        artist: "Skillet",
        description: "One of the greatest songs on the album Rise",
      },
    ];

    return next();
  };
};
