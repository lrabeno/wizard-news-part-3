const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/posts");
const app = express();

app.use("/posts", routes);
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

// parses json bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/posts");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
