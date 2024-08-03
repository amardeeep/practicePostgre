const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});
