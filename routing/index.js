const renderMW = require("../middleware/renderMW");

module.exports = (app) => {
  const objRepo = {};

  app.get("/", renderMW(objRepo, "index"));
};
