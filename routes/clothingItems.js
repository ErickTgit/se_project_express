const router = require("express").Router();
const { createItem } = require("../controllers/clothingItems");

// router.get("/", getUsers);
// router.get("/:userId", getUser);
router.post("/", createItem);

module.exports = router;
