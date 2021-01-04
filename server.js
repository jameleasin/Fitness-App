<<<<<<< HEAD
  
// REQUIREMENTS
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// PORT SETUP
=======
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


>>>>>>> refs/remotes/origin/main
const PORT = process.env.PORT || 3000;

// APP SETUP
const app = express();
<<<<<<< HEAD
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// CONNECT TO DATABASE
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/andrewisfit',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// ROUTES
const routes = require("./routes");
app.use(routes);

// SERVER SETUP
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
=======

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

require("./routes/api-routes.js")(app);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
>>>>>>> refs/remotes/origin/main
