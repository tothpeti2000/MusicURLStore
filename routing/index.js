const renderMW = require("../middleware/renderMW");

const getTracksMW = require("../middleware/tracks/getTracksMW");
const getTrackMW = require("../middleware/tracks/getTrackMW");
const getQueryTracksMW = require("../middleware/tracks/getQueryTracksMW");
const saveTrackMW = require("../middleware/tracks/saveTrackMW");
const deleteTrackMW = require("../middleware/tracks/deleteTrackMW");
const deleteTrackFromAllPlaylistsMW = require("../middleware/tracks/deleteTrackFromAllPlaylistsMW");

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

const multer = require("multer");
const upload = multer({ dest: "public/uploads" });

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
    renderMW(objRepo, "trackEditNew")
  );

  app.use(
    "/tracks/edit/:trackID",
    getTrackMW(objRepo),
    saveTrackMW(objRepo),
    renderMW(objRepo, "trackEditNew")
  );

  app.get(
    "/tracks/delete/:trackID",
    getTrackMW(objRepo),
    deleteTrackFromAllPlaylistsMW(objRepo),
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
    renderMW(objRepo, "playlistDetails")
  );

  app.get(
    "/playlist/:playlistID/search",
    getPlaylistMW(objRepo),
    getQueryPlaylistTracksMW(objRepo),
    renderMW(objRepo, "playlistDetails")
  );

  app.use(
    "/playlist/:playlistID/add",
    getPlaylistMW(objRepo),
    saveTrackMW(objRepo),
    addTrackToPlaylistMW(objRepo),
    renderMW(objRepo, "trackEditNew")
  );

  app.use(
    "/playlist/:playlistID/edit/:trackID",
    getPlaylistMW(objRepo),
    getTrackMW(objRepo),
    saveTrackMW(objRepo),
    renderMW(objRepo, "trackEditNew")
  );

  app.get(
    "/playlist/:playlistID/delete/:trackID",
    getPlaylistMW(objRepo),
    deletePlaylistTrackMW(objRepo)
  );

  app.use(
    "/playlists/add",
    getTracksMW(objRepo),
    upload.single("img"),
    savePlaylistMW(objRepo),
    renderMW(objRepo, "playlistEditNew")
  );

  app.use(
    "/playlists/edit/:playlistID",
    getPlaylistMW(objRepo),
    getTracksMW(objRepo),
    upload.single("img"),
    savePlaylistMW(objRepo),
    renderMW(objRepo, "playlistEditNew")
  );

  app.get(
    "/playlists/delete/:playlistID",
    getPlaylistMW(objRepo),
    deletePlaylistMW(objRepo)
  );
};
