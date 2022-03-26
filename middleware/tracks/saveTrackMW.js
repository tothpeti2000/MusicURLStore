/**
 * If the request body is empty, it's a GET request so simply return next()
 * Otherwise, it's a POST request
 *      If res.locals.track is undefined, create a new entity, otherwise, update the track
 *      Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    if (typeof req.body === "undefined") {
      return next();
    }

    return res.redirect("/tracks");
  };
};
