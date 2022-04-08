/**
 * Used entity: res.locals.track
 * Delete the track from the DB
 * Redirect to /tracks after success
 */

module.exports = (objRepo) => {
  return (req, res, next) => {
    console.log(res.locals.track);
    const idx = objRepo.tracks.findIndex((t) => t._id === res.locals.track._id);
    console.log(idx);

    objRepo.tracks.splice(idx, 1);
    console.log(objRepo.tracks);

    return res.redirect("/tracks");
  };
};
