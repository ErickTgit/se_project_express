const User = require("../models/user");
const {
  errorInvalid,
  errorNotFound,
  errorDefault,
} = require("../utils/errors");

// Gets all Users
const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      console.error(err);
      return res.status(errorDefault).send({ message: err.message });
    });
};

// Posts a new user
const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res.status(errorInvalid).send({ message: err.message });
      }
      return res.status(errorDefault).send({ message: err.message });
    });
};

// Gets user by ID
const getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res.status(errorNotFound).send({ message: err.message });
      } else if (err.name === "CastError") {
        return res.status(errorInvalid).send({ message: err.message });
      }
      return res.status(errorDefault).send({ message: err.message });
    });
};

module.exports = { getUsers, createUser, getUser };
