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
      return res
        .status(errorDefault)
        .send({ message: "An error has occurred on the server." });
    });
};

// Posts a new user
const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError" || err.name === "CastError") {
        return res.status(errorInvalid).send({ message: "Invalid data" });
      }
      return res
        .status(errorDefault)
        .send({ message: "An error has occurred on the server." });
    });
};

// Gets user by ID
const getUser = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      console.error(err);

      if (err.name === "DocumentNotFoundError") {
        return res.status(errorNotFound).send({ message: "User not found" });
      }
      if (err.name === "CastError") {
        return res.status(errorInvalid).send({ message: "Invalid user id" });
      }
      return res
        .status(errorDefault)
        .send({ message: "An error has occurred on the server." });
    });
};

module.exports = { getUsers, createUser, getUser };
