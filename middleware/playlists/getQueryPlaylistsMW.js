/**
 * Get the playlists from the DB whose title contains the query string
 * Save the result to res.locals.playlists
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    res.locals.playlists = [
      {
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
      },
    ];

    return next();
  };
};
