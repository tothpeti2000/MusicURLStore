/**
 * Get the playlist with the given ID from the DB
 * Save the result to res.locals.playlist
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.playlist = {
      name: "Skillet",
      tracks: [
        {
          _id: 1,
          title: "Rise",
          artist: "Skillet",
          description: "One of the greatest songs on the album Rise",
        },
        {
          _id: 2,
          title: "Awake and Alive",
          artist: "Skillet",
          description: "One of the greatest songs on the album Awake",
        },
      ],
    };

    return next();
  };
};
