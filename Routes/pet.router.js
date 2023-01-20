const express = require("express");
const { PetController } = require("../Controllers/pet.controller.js");
const { verifyToken } = require("../Middleware/verifyToken.js");

const controller = new PetController();

const PetRouter = express.Router();

PetRouter.get("/pet", (req, res) => {
  controller.list(req, res);
});

PetRouter.post("/pet", (req, res) => {
  controller.create(req, res);
});

module.exports = { PetRouter };

//
