const renderMW = require("../middleware/renderMW");

const getTracksMW = require("../middleware/tracks/getTracksMW");
const getTrackMW = require("../middleware/tracks/getTrackMW");
const getQueryTracksMW = require("../middleware/tracks/getQueryTracksMW");
const saveTrackMW = require("../middleware/tracks/saveTrackMW");
const deleteTrackMW = require("../middleware/tracks/deleteTrackMW");

const getPlaylistsMW = require("../middleware/playlists/getPlaylistsMW");
const getPlaylistMW = require("../middleware/playlists/getPlaylistMW");
const getQueryPlaylistsMW = require("../middleware/playlists/getQueryPlaylistsMW");
const getQueryPlaylistTracksMW = require("../middleware/playlists/getQueryPlaylistTracksMW");
const addTrackToPlaylistMW = require("../middleware/playlists/addTrackToPlaylistMW");
const savePlaylistMW = require("../middleware/playlists/savePlaylistMW");
const deletePlaylistMW = require("../middleware/playlists/deletePlaylistMW");
const deletePlaylistTrackMW = require("../middleware/playlists/deletePlaylistTrackMW");

const trackModel = require("../models/track");
const playlistModel = require("../models/playlist");

module.exports = (app) => {
  const objRepo = {
    trackModel: trackModel,
    playlistModel: playlistModel,
  };

  app.get("/", renderMW(objRepo, "index"));

  app.get("/tracks", getTracksMW(objRepo), renderMW(objRepo, "tracks"));

  app.get(
    "/tracks/search",
    getQueryTracksMW(objRepo),
    renderMW(objRepo, "tracks")
  );

  app.use(
    "/tracks/add",
    saveTrackMW(objRepo),
    renderMW(objRepo, "trackEditNewForm")
  );

  app.use(
    "/tracks/edit/:trackID",
    getTrackMW(objRepo),
    saveTrackMW(objRepo),
    renderMW(objRepo, "trackEditNewForm")
  );

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

  app.get(
    "/playlists/search",
    getQueryPlaylistsMW(objRepo),
    renderMW(objRepo, "playlists")
  );

  app.get(
    "/playlist/:playlistID",
    getPlaylistMW(objRepo),
    renderMW(objRepo, "playlistdetails")
  );

  app.get(
    "/playlist/:playlistID/search",
    getPlaylistMW(objRepo),
    getQueryPlaylistTracksMW(objRepo),
    renderMW(objRepo, "playlistdetails")
  );

  app.post(
    "/playlist/:playlistID/add",
    getPlaylistMW(objRepo),
    addTrackToPlaylistMW(objRepo)
  );

  app.get(
    "/playlist/:playlistID/delete/:trackID",
    getPlaylistMW(objRepo),
    deletePlaylistTrackMW(objRepo)
  );

  app.use(
    "/playlists/add",
    getTracksMW(objRepo),
    savePlaylistMW(objRepo),
    renderMW(objRepo, "createplaylist")
  );

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
