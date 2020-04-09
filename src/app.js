const express = require("express");
const cors = require("cors");

const toArray = require("./utils/toArray")

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
  const {title, url, techs } = req.body

  const repositorie = {
    id: uuid(),
    title,
    url,
    techs: toArray(techs),
    likes: 0
  }

  repositories.push(repositorie);
  
  return res.json(repositorie)
});

app.put("/repositories/:id", (req, res) => {
  const {id} = req.params;
  const repoIndex = repositories.findIndex(repositorie => repositorie.id = id)

  if (repoIndex < 0) {
    return res.status(400).json({error:`Repositorie with id ${id} not found.`})
  }

  const {
    title= repositories[repoIndex].title, 
    url=repositories[repoIndex].url, 
    techs,
  } = req.body

  const newTechs = techs
  ? toArray(techs)
  : repositories[repoIndex].techs;  

  const repositorie = {
    title,
    url,
    techs: newTechs,
    likes : repositories[repoIndex].likes
  }

  repositories[repoIndex] = repositorie

  return res.json(repositorie)
});

app.delete("/repositories/:id", (req, res) => {
  const {id} = req.params;
  const repoIndex = repositories.findIndex(repositorie => repositorie.id = id)

  if (repoIndex < 0) {
    return res.status(400).json({error:`Repositorie with id ${id} not found.`})
  }

  repositories[repoIndex].splice;

  return res.status(204).send
});

app.post("/repositories/:id/like", (req, res) => {
  // TODO
});

module.exports = app;
