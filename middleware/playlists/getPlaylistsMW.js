/**
 * Get all playlists from the DB
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
      {
        name: "Skillet Playlist",
        tracks: [
          {
            _id: 3,
            title: "Hero",
            artist: "Skillet",
            description: "One of the greatest songs on the album Awake",
          },
        ],
      },
    ];

    return next();
  };
};
