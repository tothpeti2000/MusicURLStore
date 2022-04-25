module.exports = (objRepo) => {
  const playlistModel = objRepo.playlistModel;

  return async (req, res, next) => {
    try {
      const playlists = await playlistModel.find({});

      playlists.forEach(async (playlist) => {
        playlist._tracks.remove({ _id: req.params.trackID });

        try {
          await playlist.save();
        } catch (err) {
          return next(err);
        }
      });

      return next();
    } catch (err) {
      return next(err);
    }
  };
};
