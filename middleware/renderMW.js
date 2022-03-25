/* Render the values into the template using the templating engine */

module.exports = (objRepo, viewName) => {
  return (req, res) => {
    //res.render(viewName, res.locals);
    res.end(`Page displayed: ${viewName}.html`);
  };
};
