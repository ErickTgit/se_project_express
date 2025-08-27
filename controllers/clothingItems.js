const ClothingItem = require("../models/clothingItem");
const {
  errorInvalid,
  errorNotFound,
  errorDefault,
} = require("../utils/errors");

// Posts new Clothing Item
const createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })
    .then((item) => res.send({ data: item }))
    .catch((err) => {
      if (err.name === "ValidationError" || err.name === "CastError") {
        return res.status(errorInvalid).send({ message: "Invalid data" });
      }
      return res
        .status(errorDefault)
        .send({ message: "An error has occurred on the server." });
    });
};

// Gets All ClothingItems
const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.status(200).send(items))
    .catch(() => {
      res
        .status(errorDefault)
        .send({ message: "An error has occurred on the server." });
    });
};
// Deletes Clothing Items by ID
const deleteItem = (req, res) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return res.status(errorNotFound).send({ message: "Item not found" });
      }
      if (err.name === "CastError") {
        return res.status(errorInvalid).send({ message: "Invalid item id" });
      }
      return res
        .status(errorDefault)
        .send({ message: "An error has occurred on the server." });
    });
};

// likes an item
const likeItem = (req, res) => {
  ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((item) => {
      if (!item)
        return res.status(errorNotFound).json({ message: "Item not found" });
      return res.json(item);
    })
    .catch((err) => {
      if (err.name === "CastError" || err.name === "ValidationError") {
        return res.status(errorInvalid).json({ message: "Invalid data" });
      }

      return res
        .status(errorDefault)
        .json({ message: "An error has occurred on the server." });
    });
};

//dislikes an item
const dislikeItem = (req, res) => {
  ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((item) => {
      if (!item)
        return res.status(errorNotFound).json({ message: "Item not found" });
      return res.json(item);
    })
    .catch((err) => {
      if (err.name === "CastError" || err.name === "ValidationError") {
        return res.status(errorInvalid).json({ message: "Invalid data" });
      }

      return res
        .status(errorDefault)
        .json({ message: "An error has occurred on the server." });
    });
};

module.exports = { createItem, getItems, deleteItem, likeItem, dislikeItem };
