/**
 * If res.locals.playlist is undefined, create a new entity, otherwise, update the playlist
 * Redirect to /playlists after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    return res.redirect("/playlists");
  };
};
