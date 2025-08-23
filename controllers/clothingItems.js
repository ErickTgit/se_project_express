const ClothingItem = require("../models/clothingItem");
const {
  errorInvalid,
  errorNotFound,
  errorDefault,
} = require("../utils/errors");

// Posts new Clothing Item
const createItem = (req, res) => {
  const { name, weather, imageUrl, ownerId } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: ownerId })

    .then((item) => {
      res.send({ data: item });
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
};

// Gets All ClothingItems
const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((err) => {
      res.status(errorDefault).send({ message: err.message });
    });
};

module.exports = { createItem, getItems };
