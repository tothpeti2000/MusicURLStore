/**
 * Used entity: res.locals.track
 * Delete the track from the DB
 * Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    return res.redirect("/tracks");
  };
};
