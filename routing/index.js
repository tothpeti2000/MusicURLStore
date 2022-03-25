const renderMW = require("../middleware/renderMW");
const getTrackMW = require("../middleware/tracks/getTrackMW");
const deleteTrackMW = require("../middleware/tracks/deleteTrackMW");

module.exports = (app) => {
  const objRepo = {};

  app.get("/", renderMW(objRepo, "index"));

  app.get("/tracks", renderMW(objRepo, "tracks"));

  app.post(
    "/tracks/edit/:trackID",
    getTrackMW(objRepo),
    renderMW(objRepo, "tracks")
  );

  app.get(
    "/tracks/delete/:trackID",
    getTrackMW(objRepo),
    deleteTrackMW(objRepo)
  );

  app.get("/playlists", renderMW(objRepo, "playlists"));

  app.get("/playlists/add", renderMW(objRepo, "createplaylist"));
};
