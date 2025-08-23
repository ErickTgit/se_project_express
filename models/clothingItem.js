const mongoose = require("mongoose");
const validator = require("validator");

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  weather: {
    type: String,
    required: true,
    enum: ["hot", "warm", "cold"],
  },

  imageUrl: {
    type: String,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "You must enter a valid URL",
    },
  },

  owner: {
    //TODO: Add a link to the item author's model of the ObjectId type, a required field
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  likes: {
    //TODO:  a list of users who liked the item, an ObjectId array with a reference to the user modal (empty by default)
  },

  createdAt: {
    //TODO:  the item creation date, a field with the Date type and the default value Date.now
  },
});

module.exports = mongoose.model("clothingItem", clothingItemSchema);
