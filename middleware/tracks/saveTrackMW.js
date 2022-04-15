/**
 * If the request body is empty, it's a GET request so simply return next()
 * Otherwise, it's a POST request
 *      If res.locals.track is undefined, create a new entity, otherwise, update the track
 *      Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  const trackModel = objRepo.trackModel;

  return (req, res, next) => {
    if (
      typeof req.body.url === "undefined" ||
      typeof req.body.title === "undefined" ||
      typeof req.body.artist === "undefined" ||
      typeof req.body.description === "undefined"
    ) {
      return next();
    }

    let track;

    if (typeof res.locals.track === "undefined") {
      track = new trackModel();
    } else {
      track = res.locals.track;
    }

    track.url = req.body.url;
    track.title = req.body.title;
    track.artist = req.body.artist;
    track.description = req.body.description;

    track.save((err) => {
      if (err) {
        return next(err);
      }

      return res.redirect("/tracks");
    });
  };
};
