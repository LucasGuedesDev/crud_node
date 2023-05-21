const express = require("express");
const bodyParser = require('body-parser');

const server = express();

const cars = [];
const router = express.Router();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

const route = router.get("/cars", (req, res) => {
  return res.json(cars);
});

const create = router.post("/cars", (req, res) => {
  //const { id } = req.body;   
  //const { name } = req.body;
  //const { year } = req.body;
  //const { color } = req.body;
  //cars.push({id:id,nome:name,ano:year,cor:color});
  //return res.json(cars);
  res.status(201).send(req).body
});

const update = router.put('/cars/:id', (req, res) => {
    res.status(200).send(req).body
});

server.delete('/cars/:id', (req, res) => {
    const { id } = req.params.id;
    cars.pop(id);
    return res.send(id);
});

server.listen(3000);
server.use(route);
