/**
 * Used entity: res.locals.playlist
 * Delete the playlist from the DB
 * Redirect to /playlists after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    return res.redirect("/playlists");
  };
};
