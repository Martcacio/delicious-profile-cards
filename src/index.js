const express = require("express");
const cors = require("cors");
const { request } = require("express");

// create server
const app = express();

app.use(cors());

// set express middleware
app.use(express.json({ limit: "10mb" }));
app.set("view engine", "ejs");

// init express aplication
const serverPort = process.env.PORT || 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

// api

//app.get("/card/card", (req, res) => {
app.get("/card/:id", (req, res) => {
  console.log(data);
  res.render("pages/card", data);
});

app.post("/card", (req, res) => {
  // console request body params
  const response = {};

  /*   for (let item in req.body) {
    if (!item) {
      (response.success = false),
        (response.error = `Missing ${item} parameter`);
    } else {
      //todo ok -> save to db
      response.success = true;
      response.cardURL = "PONER DIRECCIÓN herokua";
    }
  } */
  if (!req.body.name) {
    response.success = false;
    response.error = "Missing name parameter";
  } else if (!req.body.job) {
    response.success = false;
    response.error = "Missing job parameter";
  } else if (!req.body.photo) {
    response.success = false;
    response.error = "Missing photo parameter";
  } else if (!req.body.email) {
    response.success = false;
    response.error = "Missing email parameter";
  } else if (!req.body.phone) {
    response.success = false;
    response.error = "Missing phone parameter";
  } else if (!req.body.linkedin) {
    response.success = false;
    response.error = "Missing linkedin parameter";
  } else if (!req.body.github) {
    response.success = false;
    response.error = "Missing github parameter";
  } else {
    //todo ok -> save to db
    response.success = true;
    const id = "";
    response.cardURL = `https://delicious-profile-card.herokuapp.com/#/${id}`;
  }

  res.json(response);
});
