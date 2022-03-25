const renderMW = require("../middleware/renderMW");
const getTrackMW = require("../middleware/tracks/getTrackMW");

module.exports = (app) => {
  const objRepo = {};

  app.get("/", renderMW(objRepo, "index"));

  app.get("/tracks", renderMW(objRepo, "tracks"));

  app.post(
    "/tracks/edit/:trackID",
    getTrackMW(objRepo),
    renderMW(objRepo, "tracks")
  );
};
