/**
 * Get all tracks from the DB
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
      {
        _id: 3,
        title: "Rise",
        artist: "Skillet",
        description: "One of the greatest songs on the album Rise",
      },
    ];

    return next();
  };
};
