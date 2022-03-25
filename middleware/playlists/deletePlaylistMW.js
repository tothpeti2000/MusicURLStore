/**
 * Used entity: res.locals.playlist
 * Delete the playlist from the DB
 * Redirect to /playlists after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    // Delete the playlist from objRepo
    const idx = objRepo.playlists.find(
      (p) => p._id === res.locals.playlist._id
    );

    objRepo.playlists = objRepo.playlists.splice(idx, 1);

    return res.redirect("/playlists");
  };
};
