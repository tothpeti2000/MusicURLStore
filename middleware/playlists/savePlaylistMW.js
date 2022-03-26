/**
 * If the request body is empty, it's a GET request so simply return next()
 * Otherwise, it's a POST request
 *      If res.locals.playlist is undefined, create a new entity, otherwise, update the playlist
 *      Redirect to /playlists after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    return res.redirect("/playlists");
  };
};
