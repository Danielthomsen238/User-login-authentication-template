const PetModel = require("../Models/pet.model");

class PetController {
  constructor() {
    console.log("Instance call of PetController");
  }

  list = async (req, res) => {
    const result = await PetModel.findAll();
    return res.json(result);
  };
  create = async (req, res) => {
    const { name, race } = req.body;

    if (name && race) {
      const model = await PetModel.create(req.body);
      return res.json({ newId: model.id });
    } else {
      res.send(418);
    }
  };
}

module.exports = { PetController };
