const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views/pages");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routing/index")(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
