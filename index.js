const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

//app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routing/index")(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
