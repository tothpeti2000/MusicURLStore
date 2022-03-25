const express = require("express");
const app = express();
const PORT = 3000;

//app.use(express.static("public"));
app.set("view engine", "ejs");
require("./routing/index")(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
