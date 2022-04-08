/**
 * Used entity: res.locals.track
 * Delete the track from the DB
 * Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    const idx = objRepo.tracks.find((t) => t._id === res.locals.track._id);

    objRepo.tracks.splice(idx, 1);

    return res.redirect("/tracks");
  };
};
