const express = require("express");
const cors = require("cors");
const {} = require()


const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {
  if (repositories[0] == null) {
    return res.status(404).json({error:'Respositories not found'});
  }

  return res.json(repositories)

});

app.post("/repositories", (req, res) => {

});

app.put("/repositories/:id", (req, res) => {
  // TODO
});

app.delete("/repositories/:id", (req, res) => {
  // TODO
});

app.post("/repositories/:id/like", (req, res) => {
  // TODO
});

module.exports = app;
