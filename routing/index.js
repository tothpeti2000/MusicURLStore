const renderMW = require("../middleware/renderMW");
const getTracksMW = require("../middleware/tracks/getTracksMW");
const getTrackMW = require("../middleware/tracks/getTrackMW");
const getQueryTracksMW = require("../middleware/tracks/getQueryTracksMW");
const saveTrackMW = require("../middleware/tracks/saveTrackMW");
const deleteTrackMW = require("../middleware/tracks/deleteTrackMW");

module.exports = (app) => {
  const objRepo = {};

  app.get("/", renderMW(objRepo, "index"));

  app.get("/tracks", getTracksMW(objRepo), renderMW(objRepo, "tracks"));

  app.post(
    "/tracks/search",
    getQueryTracksMW(objRepo),
    renderMW(objRepo, "tracks")
  );

  app.post("/tracks/add", saveTrackMW(objRepo));

  app.post("/tracks/edit/:trackID", getTrackMW(objRepo), saveTrackMW(objRepo));

  app.get(
    "/tracks/delete/:trackID",
    getTrackMW(objRepo),
    deleteTrackMW(objRepo)
  );

  app.get(
    "/playlists",
    getPlaylistsMW(objRepo),
    renderMW(objRepo, "playlists")
  );

  app.post(
    "/playlists/search",
    getQueryPlaylistsMW(objRepo),
    renderMW(objRepo, "playlists")
  );

  app.get("/playlists/add", renderMW(objRepo, "createplaylist"));

  app.post(
    "/playlists/edit/:playlistID",
    getPlaylistMW(objRepo),
    savePlaylistMW(objRepo)
  );

  app.get(
    "/playlists/delete/:playlistID",
    getPlaylistMW(objRepo),
    deletePlaylistMW(objRepo)
  );
};
