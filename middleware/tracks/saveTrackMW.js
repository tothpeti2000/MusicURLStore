/**
 * If the request body is empty, it's a GET request so simply return next()
 * Otherwise, it's a POST request
 *      If res.locals.track is undefined, create a new entity, otherwise, update the track
 *      Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    if (
      typeof req.body.url === "undefined" ||
      typeof req.body.title === "undefined" ||
      typeof req.body.artist === "undefined" ||
      typeof req.body.description === "undefined"
    ) {
      return next();
    }

    if (typeof res.locals.track === "undefined") {
      const track = {
        _id: "ObjectID_T4",
        url: req.body.url,
        title: req.body.title,
        artist: req.body.artist,
        description: req.body.description,
      };

      objRepo.tracks.push(track);
    } else {
      res.locals.track.url = req.body.url;
      res.locals.track.title = req.body.title;
      res.locals.track.artist = req.body.artist;
      res.locals.track.description = req.body.description;
    }

    return res.redirect("/tracks");
  };
};
