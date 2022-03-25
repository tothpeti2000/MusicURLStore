/**
 * If res.locals.track is undefined, create a new entity, otherwise, update the track
 * Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    return res.redirect("/tracks");
  };
};
