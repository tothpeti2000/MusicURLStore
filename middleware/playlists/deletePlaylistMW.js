/**
 * Used entity: res.locals.playlist
 * Delete the playlist from the DB
 * Redirect to /playlists after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    const idx = objRepo.playlists.findIndex(
      (p) => p._id == res.locals.playlist._id
    );

    objRepo.playlists = objRepo.playlists.splice(idx, 1);

    return res.redirect("/playlists");
  };
};
